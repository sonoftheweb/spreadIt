<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: null, // Accept any type, including File object or File[]
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    hint: {
        type: String,
        default: "",
    },
    error: {
        type: String,
        default: "",
    },
    accept: {
        type: String,
        default: "*/*",
    },
    maxSize: {
        type: Number,
        default: 5 * 1024 * 1024, // 5MB default
    },
    required: {
        type: Boolean,
        default: false,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

// Component state
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const internalError = ref("");
const fileList = ref<Array<{file: File, name: string, preview: string}>>([]);

// Clear any previous errors when component receives new modelValue
watch(
    () => props.modelValue,
    (newValue) => {
        // Clear everything if no file
        if (!newValue) {
            fileList.value = [];
            return;
        }

        try {
            if (props.multiple && Array.isArray(newValue)) {
                // Process array of files
                internalError.value = "";
                fileList.value = newValue.map(file => {
                    if (!(file instanceof File)) return { file, name: '', preview: '' };
                    
                    return {
                        file,
                        name: file.name || "",
                        preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
                    };
                });
            } else if (newValue instanceof File) {
                // Process single file
                internalError.value = "";
                fileList.value = [{
                    file: newValue,
                    name: newValue.name || "",
                    preview: newValue.type.startsWith("image/") ? URL.createObjectURL(newValue) : "",
                }];
            }
        } catch (err) {
            console.error("Error processing file:", err);
            fileList.value = [];
        }
    },
    { immediate: true }, // Process the initial value too
);

// Trigger file input click
function triggerFileInput(): void {
    if (fileInput.value) {
        fileInput.value.click();
    }
}

// Get user-friendly file type descriptions
function getFileTypeDescription(acceptString: string): string {
    if (acceptString === "*/*") return "all files";
    
    // Map of MIME types to user-friendly names
    const mimeTypeMap: Record<string, string> = {
        // Spreadsheet formats
        "application/vnd.ms-excel": "Excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Excel",
        "text/csv": "CSV",
        "application/vnd.oasis.opendocument.spreadsheet": "ODS",
        "text/tab-separated-values": "TSV",
        
        // Document formats
        "application/pdf": "PDF",
        "application/msword": "Word",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word",
        
        // Image formats
        "image/jpeg": "JPEG",
        "image/png": "PNG",
        "image/gif": "GIF",
        "image/svg+xml": "SVG",
        
        // Other common formats
        "application/zip": "ZIP",
        "application/json": "JSON",
        "text/plain": "Text",
        "text/html": "HTML"
    };
    
    const acceptTypes = acceptString.split(",").map(type => type.trim());
    
    // Use Set to remove duplicates in the final output
    const uniqueDescriptions = new Set<string>();
    
    acceptTypes.forEach(type => {
        if (type.startsWith('.')) {
            // Handle file extensions
            uniqueDescriptions.add(type.substring(1).toUpperCase());
        } else if (type === "image/*") {
            uniqueDescriptions.add("images");
        } else if (type === "video/*") {
            uniqueDescriptions.add("videos");
        } else if (type === "audio/*") {
            uniqueDescriptions.add("audio files");
        } else if (mimeTypeMap[type]) {
            // Use friendly name from our map
            uniqueDescriptions.add(mimeTypeMap[type]);
        } else {
            // Fall back to the original type if no friendly name found
            uniqueDescriptions.add(type);
        }
    });
    
    return Array.from(uniqueDescriptions).join(", ");
}

// Check if file type matches accept criteria
function isFileTypeAccepted(file: File, acceptString: string): boolean {
    if (acceptString === "*/*") return true;
    
    const acceptTypes = acceptString.split(",").map(type => type.trim());
    
    return acceptTypes.some(type => {
        // Handle extension-based types (.jpg, .pdf, etc.)
        if (type.startsWith('.')) {
            const extension = `.${file.name.split('.').pop()?.toLowerCase()}`;
            return extension === type.toLowerCase();
        }
        
        // Handle wildcard MIME types (image/*, audio/*, etc.)
        if (type.endsWith('/*')) {
            const baseMimeType = type.split('/')[0];
            return file.type.startsWith(`${baseMimeType}/`);
        }
        
        // Handle exact MIME types
        return file.type === type;
    });
}

// Handle file selection
function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;

    // Reset error state
    internalError.value = "";
    
    if (props.multiple) {
        // Handle multiple files
        const validFiles: File[] = [];
        const files = Array.from(target.files);
        
        // Validate all files
        for (const file of files) {
            // Validate file type
            if (props.accept !== "*/*" && !isFileTypeAccepted(file, props.accept)) {
                internalError.value = `Invalid file type: ${file.name}. Please upload ${
                    props.accept.includes(',') ? 'one of these file types' : 'a file of type'
                }: ${getFileTypeDescription(props.accept)}.`;
                return;
            }
            
            // Validate file size
            if (file.size > props.maxSize) {
                internalError.value = `File too large: ${file.name}. Maximum size is ${formatFileSize(
                    props.maxSize,
                )}.`;
                return;
            }
            
            validFiles.push(file);
        }
        
        // Process valid files
        fileList.value = validFiles.map(file => ({
            file,
            name: file.name,
            preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
        }));
        
        // Emit array of files
        emit("update:modelValue", validFiles);
    } else {
        // Handle single file (backward compatibility)
        const file = target.files[0];
        
        // Validate file type
        if (props.accept !== "*/*" && !isFileTypeAccepted(file, props.accept)) {
            internalError.value = `Invalid file type. Please upload ${
                props.accept.includes(',') ? 'one of these file types' : 'a file of type'
            }: ${getFileTypeDescription(props.accept)}.`;
            return;
        }
        
        // Validate file size
        if (file.size > props.maxSize) {
            internalError.value = `File too large. Maximum size is ${formatFileSize(
                props.maxSize,
            )}.`;
            return;
        }
        
        // Process the file
        fileList.value = [{
            file,
            name: file.name,
            preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
        }];
        
        // Emit the single file
        emit("update:modelValue", file);
    }
}

// Format file size to human-readable format
function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} bytes`;
    else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    else return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Define drag event handlers
function handleDragEnter(e: DragEvent): void {
    e.preventDefault();
    isDragging.value = true;
}

function handleDragLeave(e: DragEvent): void {
    e.preventDefault();
    isDragging.value = false;
}

function handleDragOver(e: DragEvent): void {
    e.preventDefault();
}

function handleDrop(e: DragEvent): void {
    e.preventDefault();
    isDragging.value = false;

    if (e.dataTransfer?.files.length) {
        if (fileInput.value) {
            // Set file(s) to input for validation and processing
            const dataTransfer = new DataTransfer();
            
            if (props.multiple) {
                // Add all dropped files when multiple is enabled
                Array.from(e.dataTransfer.files).forEach(file => {
                    dataTransfer.items.add(file);
                });
            } else {
                // Add only the first file when multiple is not enabled
                dataTransfer.items.add(e.dataTransfer.files[0]);
            }
            
            fileInput.value.files = dataTransfer.files;

            // Trigger change event
            const changeEvent = new Event("change", { bubbles: true });
            fileInput.value.dispatchEvent(changeEvent);
        }
    }
}

// Remove all files
function removeAllFiles(): void {
    emit("update:modelValue", props.multiple ? [] : null);
    fileList.value = [];
    internalError.value = "";
    if (fileInput.value) {
        fileInput.value.value = "";
    }
}

// Remove a specific file by index
function removeFile(index: number): void {
    if (props.multiple && Array.isArray(props.modelValue)) {
        const newFiles = [...props.modelValue];
        newFiles.splice(index, 1);
        emit("update:modelValue", newFiles.length ? newFiles : []);
        
        // Also update the local fileList
        fileList.value.splice(index, 1);
    } else {
        // Single file mode
        removeAllFiles();
    }
}
</script>

<template>
    <UFormField :label="label" :required="required">
        <div
            class="border-2 border-dashed rounded-md p-4 transition-colors"
            :class="[
                isDragging
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300',
                internalError || error ? 'border-red-300' : '',
            ]"
            @dragenter="handleDragEnter"
            @dragleave="handleDragLeave"
            @dragover="handleDragOver"
            @drop="handleDrop"
        >
            <!-- Hidden file input -->
            <input
                ref="fileInput"
                type="file"
                :name="name"
                :accept="accept"
                :multiple="multiple"
                class="hidden"
                @change="handleFileSelect"
            />

            <!-- Upload area content -->
            <div class="flex flex-col items-center justify-center space-y-2">
                <!-- State: No file uploaded yet -->
                <div v-if="!modelValue || (Array.isArray(modelValue) && modelValue.length === 0)" class="text-center">
                    <UIcon
                        name="i-lucide-upload-cloud"
                        class="text-4xl text-gray-400 mb-2"
                    />
                    <p class="text-sm text-gray-600 mb-2">
                        Drag and drop your file here, or
                        <button
                            type="button"
                            class="text-primary-600 hover:text-primary-800 focus:outline-none font-medium"
                            @click="triggerFileInput"
                        >
                            browse
                        </button>
                    </p>
                    <p class="text-xs text-gray-500">
                        {{
                            hint ||
                            `Accepted formats: ${getFileTypeDescription(accept)}`
                        }}
                    </p>
                    <p v-if="maxSize" class="text-xs text-gray-500">
                        Max size: {{ formatFileSize(maxSize) }}
                    </p>
                </div>

                <!-- State: Files uploaded -->
                <div v-else class="w-full">
                    <!-- Multiple files -->
                    <div v-if="multiple && fileList.length > 0" class="space-y-2">
                        <div class="flex justify-between items-center mb-2">
                            <p class="text-sm font-medium text-gray-700">
                                {{ fileList.length }} file{{ fileList.length > 1 ? 's' : '' }} selected
                            </p>
                            <UButton
                                type="button"
                                variant="ghost"
                                color="primary"
                                size="xs"
                                @click="removeAllFiles"
                                aria-label="Remove all files"
                            >
                                Remove all
                            </UButton>
                        </div>
                        <div 
                            v-for="(item, index) in fileList" 
                            :key="index"
                            class="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                        >
                            <!-- Preview for images -->
                            <div class="flex items-center flex-grow overflow-hidden">
                                <div
                                    v-if="item.preview"
                                    class="mr-3 w-8 h-8 overflow-hidden rounded-md flex-shrink-0"
                                >
                                    <img
                                        :src="item.preview"
                                        alt="Preview"
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    v-else
                                    class="mr-3 w-8 h-8 overflow-hidden rounded-md flex-shrink-0 bg-gray-100 flex items-center justify-center"
                                >
                                    <UIcon
                                        name="i-lucide-file"
                                        class="text-gray-400 text-sm"
                                    />
                                </div>

                                <div class="overflow-hidden">
                                    <p
                                        class="text-sm font-medium text-gray-900 truncate"
                                    >
                                        {{ item.name }}
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        {{ formatFileSize(item.file.size) }}
                                    </p>
                                </div>
                            </div>

                            <!-- Remove button -->
                            <UButton
                                type="button"
                                variant="ghost"
                                color="primary"
                                icon="i-lucide-x"
                                size="xs"
                                @click="removeFile(index)"
                                aria-label="Remove file"
                            />
                        </div>
                    </div>
                    
                    <!-- Single file (backward compatibility) -->
                    <div v-else-if="fileList.length === 1" class="flex items-center justify-between">
                        <!-- Preview for images -->
                        <div class="flex items-center">
                            <div
                                v-if="fileList[0].preview"
                                class="mr-3 w-12 h-12 overflow-hidden rounded-md flex-shrink-0"
                            >
                                <img
                                    :src="fileList[0].preview"
                                    alt="Preview"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                v-else
                                class="mr-3 w-12 h-12 overflow-hidden rounded-md flex-shrink-0 bg-gray-100 flex items-center justify-center"
                            >
                                <UIcon
                                    name="i-lucide-file"
                                    class="text-gray-400 text-xl"
                                />
                            </div>

                            <div class="overflow-hidden">
                                <p
                                    class="text-sm font-medium text-gray-900 truncate"
                                >
                                    {{ fileList[0].name }}
                                </p>
                                <p class="text-xs text-gray-500">
                                    {{ formatFileSize(fileList[0].file.size) }}
                                </p>
                            </div>
                        </div>

                        <!-- Remove button -->
                        <UButton
                            type="button"
                            variant="ghost"
                            color="primary"
                            icon="i-lucide-x"
                            size="xs"
                            @click="removeFile(0)"
                            aria-label="Remove file"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Error message -->
        <template #hint>
            <p
                :class="{
                    'text-red-500 text-xs mt-1': internalError || error,
                    'text-gray-400 text-xs mt-1': !internalError && !error,
                }"
            >
                {{ internalError || error || hint }}
            </p>
        </template>
    </UFormField>
</template>

<style scoped>
/* Add any custom styles here */
</style>
