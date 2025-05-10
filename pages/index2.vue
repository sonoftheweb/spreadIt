<script setup lang="ts">
import { ref } from "vue";
import FileInput from "~/components/form/FileInput.vue";

// Use a simple ref instead of vee-validate for now to fix the issue
const selectedFiles = ref<File[]>([]);
const name = ref<string>("");

// Simple validation
const nameError = ref<string>("");
const fileError = ref<string>("");
const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!name.value || name.value.length < 2) {
        nameError.value = "Name must be at least 2 characters";
        isValid = false;
    } else {
        nameError.value = "";
    }

    // Validate files
    if (
        !selectedFiles.value ||
        !Array.isArray(selectedFiles.value) ||
        selectedFiles.value.length === 0
    ) {
        fileError.value = "At least one file is required";
        isValid = false;
    } else {
        fileError.value = "";
    }

    return isValid;
};

const onSubmit = () => {
    if (validateForm()) {
        console.log("Form validated successfully");
        console.log("Files:", selectedFiles.value);
        console.log("Name:", name.value);

        // Here you would handle the file data instead of sending to API
        if (selectedFiles.value && selectedFiles.value.length > 0) {
            console.log("Number of files:", selectedFiles.value.length);

            // Log details for each file
            selectedFiles.value.forEach((file: File, index) => {
                console.log(`File ${index + 1}:`);
                console.log("  File name:", file.name);
                console.log("  File size:", file.size);
                console.log("  File type:", file.type);
            });
        }
    } else {
        console.log("Form validation failed");
    }
};
</script>

<template>
    <div class="h-screen w-screen flex items-center justify-center">
        <div class="w-1/3">
            <div>
                <h1 class="text-2xl text-center">Ready, set, upload...</h1>
                <div class="text-center mb-4">
                    <p>Upload your file to begin</p>
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="mb-4 w-full">
                        <UInput
                            size="lg"
                            v-model="name"
                            label="Name"
                            class="w-full"
                            placeholder="Enter name"
                            :error="nameError"
                        />
                    </div>

                    <FileInput
                        v-model="selectedFiles"
                        name="logo"
                        label="Spreadsheet"
                        accept=".xls,.xlsx,.csv,.ods,.tsv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,application/vnd.oasis.opendocument.spreadsheet,text/tab-separated-values"
                        :error="fileError"
                        :max-size="2 * 1024 * 1024"
                        multiple
                        required
                    />

                    <div class="mt-4">
                        <UButton type="submit" color="primary" block>
                            Upload
                        </UButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
