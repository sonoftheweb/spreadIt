<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useRouter } from "vue-router";
import * as z from "zod";
import { Field, Form } from "vee-validate";
import { ref } from "vue";

const router = useRouter();
const globalError = ref("");
const loading = ref(false);

// Define validation schema with Zod
const validationSchema = toTypedSchema(
    z
        .object({
            name: z
                .string()
                .min(2, "Name must be at least 2 characters")
                .max(50, "Name cannot exceed 50 characters"),
            email: z.string().email("Please enter a valid email address"),
            password: z
                .string()
                .min(8, "Password must be at least 8 characters")
                .regex(
                    /[A-Z]/,
                    "Password must contain at least one uppercase letter",
                )
                .regex(/[0-9]/, "Password must contain at least one number"),
            passwordConfirmation: z.string(),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
            message: "Passwords do not match",
            path: ["passwordConfirmation"],
        }),
);

// Form initial values
const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
};

// Handle form submission
const onSubmit = async (values: any) => {
    try {
        loading.value = true;
        globalError.value = "";

        // Log for testing (remove in production)
        console.log("Form submitted with values:", values);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically make an API call to register the user
        // For example:
        // await $fetch('/api/auth/register', {
        //   method: 'POST',
        //   body: {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password
        //   }
        // });

        // Redirect to login page after successful registration
        router.push("/auth/login");
    } catch (err: any) {
        console.error("Registration error:", err);
        globalError.value =
            err.message ||
            "An error occurred during registration. Please try again.";
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div
        class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
        <UCard class="w-full max-w-md">
            <template #header>
                <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-900">
                        Create your account
                    </h2>
                    <p class="mt-2 text-sm text-gray-600">
                        Or
                        <NuxtLink
                            to="/auth/login"
                            class="font-medium text-primary-600 hover:text-primary-500"
                        >
                            sign in to your existing account
                        </NuxtLink>
                    </p>
                </div>
            </template>

            <div class="mt-4">
                <UAlert
                    v-if="globalError"
                    type="danger"
                    :description="globalError"
                    class="mb-4"
                />

                <Form
                    :validation-schema="validationSchema"
                    :initial-values="initialValues"
                    @submit="onSubmit"
                    v-slot="{ errors, isSubmitting }"
                    class="space-y-6"
                >
                    <div>
                        <UFormGroup
                            label="Name"
                            name="name"
                            :error="errors.name"
                        >
                            <Field name="name" v-slot="{ field, errorMessage }">
                                <UInput
                                    v-bind="field"
                                    placeholder="Enter your full name"
                                    size="lg"
                                    :error="!!errorMessage"
                                    autocomplete="name"
                                />
                            </Field>
                        </UFormGroup>
                    </div>

                    <div>
                        <UFormGroup
                            label="Email address"
                            name="email"
                            :error="errors.email"
                        >
                            <Field
                                name="email"
                                v-slot="{ field, errorMessage }"
                            >
                                <UInput
                                    v-bind="field"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="lg"
                                    :error="!!errorMessage"
                                    autocomplete="email"
                                />
                            </Field>
                        </UFormGroup>
                    </div>

                    <div>
                        <UFormGroup
                            label="Password"
                            name="password"
                            :error="errors.password"
                        >
                            <Field
                                name="password"
                                v-slot="{ field, errorMessage }"
                            >
                                <UInput
                                    v-bind="field"
                                    type="password"
                                    placeholder="Create a password"
                                    size="lg"
                                    :error="!!errorMessage"
                                    autocomplete="new-password"
                                />
                            </Field>
                            <template #hint>
                                <p class="text-xs text-gray-500">
                                    Password must be at least 8 characters with
                                    one uppercase letter and one number
                                </p>
                            </template>
                        </UFormGroup>
                    </div>

                    <div>
                        <UFormGroup
                            label="Confirm Password"
                            name="passwordConfirmation"
                            :error="errors.passwordConfirmation"
                        >
                            <Field
                                name="passwordConfirmation"
                                v-slot="{ field, errorMessage }"
                            >
                                <UInput
                                    v-bind="field"
                                    type="password"
                                    placeholder="Confirm your password"
                                    size="lg"
                                    :error="!!errorMessage"
                                    autocomplete="new-password"
                                />
                            </Field>
                        </UFormGroup>
                    </div>

                    <div>
                        <UButton
                            type="submit"
                            block
                            size="lg"
                            :loading="isSubmitting || loading"
                            :disabled="isSubmitting || loading"
                        >
                            Create Account
                        </UButton>
                    </div>
                </Form>
            </div>

            <template #footer>
                <p class="text-center text-sm text-gray-600">
                    By signing up, you agree to our
                    <a
                        href="#"
                        class="font-medium text-primary-600 hover:text-primary-500"
                        >Terms of Service</a
                    >
                    and
                    <a
                        href="#"
                        class="font-medium text-primary-600 hover:text-primary-500"
                        >Privacy Policy</a
                    >
                </p>
            </template>
        </UCard>
    </div>
</template>
