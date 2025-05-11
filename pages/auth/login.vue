<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const loginError = ref("");
const successMessage = ref("");
const loading = ref(false);

// Define validation schema with Zod
const schema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, "Password is required"),
    remember: z.boolean().optional().default(false),
});

// Define type from schema
type Schema = z.output<typeof schema>;

// Define form state as reactive
const state = reactive<Partial<Schema>>({
    email: "",
    password: "",
    remember: false,
});

// For tracking field errors
const errors = ref({
    email: "",
    password: "",
});

// For input bindings
const emailAttrs = { id: "email", name: "email" };
const passwordAttrs = { id: "password", name: "password" };

// Check for successful registration redirect
onMounted(() => {
    if (route.query.registered === "true") {
        successMessage.value =
            "Registration successful! Please log in with your new account.";
    }
});

// Update errors when validation happens
const onError = (error: any) => {
    // Reset all errors
    errors.value = {
        email: "",
        password: "",
    };

    // Map validation errors to our error state
    if (error?.errors) {
        for (const err of error.errors) {
            const path = err.path?.[0];
            if (path && path in errors.value) {
                errors.value[path as keyof typeof errors.value] = err.message;
            }
        }
    }
};

// Handle form submission with proper typing
const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
    try {
        loading.value = true;
        loginError.value = "";
        successMessage.value = "";

        console.log("Logging in user...");

        // Simulate API delay (replace with actual API call)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Replace with actual API call
        // const response = await $fetch('/api/auth/login', {
        //   method: 'POST',
        //   body: {
        //     email: event.data.email,
        //     password: event.data.password,
        //     remember: event.data.remember
        //   }
        // });

        // Check if login was successful
        // if (response.status === "error") {
        //     throw new Error(response.message || "Login failed");
        // }

        // Redirect to dashboard after successful login
        navigateTo("/");
    } catch (err) {
        console.error("Login error:", err);

        // Handle error response from API
        let errorMessage = "Invalid email or password. Please try again.";

        if (err instanceof Error) {
            errorMessage = err.message;
        } else if (
            typeof err === "object" &&
            err !== null &&
            "message" in err
        ) {
            errorMessage = String((err as { message: string }).message);
        }

        loginError.value = errorMessage;
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="flex p-3 w-screen h-screen bg-cyan-900">
        <div class="md:w-1/2 hidden md:block">Some expanded content</div>
        <div class="md:w-1/2 w-full rounded-lg bg-white text-center">
            <div
                class="w-full h-full flex flex-col items-center justify-center px-4"
            >
                <div class="max-w-sm w-full text-gray-600 space-y-8">
                    <div class="text-center">
                        <!-- <img
              src="https://liveloads.ca/wp-content/uploads/2024/06/cropped-LiveLoads-logo_lg-200x58.png"
              width="150"
              class="mx-auto"
            /> -->
                        <div class="mt-5 space-y-2">
                            <h3
                                class="text-gray-800 text-2xl font-bold sm:text-3xl"
                            >
                                Log in to your account
                            </h3>
                            <p class="">
                                Don't have an account?
                                <a
                                    class="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer"
                                    @click="navigateTo('/auth/register')"
                                    >Sign up</a
                                >
                            </p>
                        </div>
                    </div>

                    <!-- Show API errors at the top of the form -->
                    <div
                        v-if="loginError"
                        class="bg-red-50 border-l-4 border-red-500 p-4 mb-4"
                    >
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <UIcon
                                    name="i-lucide-alert-circle"
                                    class="text-red-500"
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-red-700">
                                    {{ loginError }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Success message for registration -->
                    <div
                        v-if="successMessage"
                        class="bg-green-50 border-l-4 border-green-500 p-4 mb-4"
                    >
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <UIcon
                                    name="i-lucide-check-circle"
                                    class="text-green-500"
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-green-700">
                                    {{ successMessage }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <UForm
                        :schema="schema"
                        :state="state"
                        @submit="handleSubmit"
                        @error="onError"
                    >
                        <div class="mb-4">
                            <UFormField label="Email" size="xl">
                                <UInput
                                    v-model="state.email"
                                    v-bind="emailAttrs"
                                    class="w-full"
                                    variant="outline"
                                    type="email"
                                    placeholder="Enter your email"
                                    icon="i-lucide-at-sign"
                                    :color="errors.email ? 'red' : undefined"
                                />
                                <template #hint>
                                    <p
                                        :class="
                                            errors.email
                                                ? 'text-red-500 text-xs mt-1'
                                                : 'text-gray-400 text-xs mt-1'
                                        "
                                    >
                                        {{
                                            errors.email ||
                                            "Enter your registered email address"
                                        }}
                                    </p>
                                </template>
                            </UFormField>
                        </div>

                        <div class="mb-4">
                            <UFormField label="Password" size="xl">
                                <UInput
                                    v-model="state.password"
                                    v-bind="passwordAttrs"
                                    class="w-full"
                                    variant="outline"
                                    size="xl"
                                    type="password"
                                    placeholder="Enter your password"
                                    icon="i-lucide-lock"
                                    :color="errors.password ? 'red' : undefined"
                                />
                                <template #hint>
                                    <p
                                        :class="
                                            errors.password
                                                ? 'text-red-500 text-xs mt-1'
                                                : 'text-gray-400 text-xs mt-1'
                                        "
                                    >
                                        {{
                                            errors.password ||
                                            "Enter your password"
                                        }}
                                    </p>
                                </template>
                            </UFormField>
                        </div>

                        <button
                            type="submit"
                            class="w-full mt-2 px-4 py-2 text-white font-medium bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-600 rounded-lg duration-150"
                            :disabled="loading"
                        >
                            {{ loading ? "Signing in..." : "Sign in" }}
                        </button>
                    </UForm>

                    <div class="relative">
                        <span class="block w-full h-px bg-gray-300"></span>
                        <p
                            class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto"
                        >
                            Or continue with
                        </p>
                    </div>

                    <div class="space-y-4 text-sm font-medium">
                        <!-- Google Button -->
                        <button
                            class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                        >
                            <img
                                src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                                alt="Google"
                                class="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        <!-- Twitter Button -->
                        <button
                            class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                        >
                            <img
                                src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg"
                                alt="Twitter"
                                class="w-5 h-5"
                            />
                            Continue with Twitter
                        </button>

                        <!-- Github Button -->
                        <button
                            class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
                        >
                            <img
                                src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg"
                                alt="Github"
                                class="w-5 h-5"
                            />
                            Continue with Github
                        </button>
                    </div>

                    <div class="text-center">
                        <NuxtLink
                            to="/auth/forgot-password"
                            class="text-cyan-600 hover:text-cyan-500"
                        >
                            Forgot password?
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
