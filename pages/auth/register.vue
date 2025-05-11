<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useRouter } from "vue-router";
import * as z from "zod";
import { Field, Form, useForm } from "vee-validate";
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
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    })
);

// Form setup with VeeValidate
const { handleSubmit, errors, isSubmitting, meta, values } = useForm({
  validationSchema,
  initialValues: {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  },
});

// For input bindings
const nameAttrs = { id: "name", name: "name" };
const emailAttrs = { id: "email", name: "email" };
const passwordAttrs = { id: "password", name: "password" };
const passwordConfirmationAttrs = { id: "passwordConfirmation", name: "passwordConfirmation" };

// Handle form submission
const submitForm = handleSubmit(async (values) => {
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
  } catch (err) {
    console.error("Registration error:", err);
    globalError.value =
      err.message || "An error occurred during registration. Please try again.";
  } finally {
    loading.value = false;
  }
});

// Navigation function
const navigateTo = (path) => {
  router.push(`/auth/${path}`);
};
</script>

<template>
  <div class="flex p-3 w-screen h-screen bg-cyan-900">
    <div class="md:w-1/2 hidden md:block">Some expanded content</div>
    <div class="md:w-1/2 w-full rounded-lg bg-white text-center">
      <div class="w-full h-full flex flex-col items-center justify-center px-4">
        <div class="max-w-sm w-full text-gray-600 space-y-8">
          <div class="text-center">
            <img
              src="https://liveloads.ca/wp-content/uploads/2024/06/cropped-LiveLoads-logo_lg-200x58.png"
              width="150"
              class="mx-auto"
            />
            <div class="mt-5 space-y-2">
              <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Create your account</h3>
              <p class="">
                Already have an account?
                <a
                  class="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer"
                  @click="navigateTo('login')"
                >Sign in</a>
              </p>
            </div>
          </div>
          
          <!-- Show API errors at the top of the form -->
          <div v-if="globalError" class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <UIcon name="i-lucide-alert-circle" class="text-red-500" />
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-700">
                  {{ globalError }}
                </p>
              </div>
            </div>
          </div>

          <form @submit.prevent="submitForm">
            <!-- Name field -->
            <div class="mb-4">
              <UFormField label="Full Name" size="xl">
                <UInput
                  v-model="values.name"
                  v-bind="nameAttrs"
                  class="w-full"
                  variant="outline"
                  placeholder="Enter your full name"
                  icon="i-lucide-user"
                  :color="errors.name ? 'error' : undefined"
                />
                <template #hint>
                  <p
                    :class="
                      errors.name
                        ? 'text-red-500 text-xs mt-1'
                        : 'text-gray-400 text-xs mt-1'
                    "
                  >
                    {{ errors.name || "Your full name" }}
                  </p>
                </template>
              </UFormField>
            </div>

            <!-- Email field -->
            <div class="mb-4">
              <UFormField label="Email" size="xl">
                <UInput
                  v-model="values.email"
                  v-bind="emailAttrs"
                  class="w-full"
                  variant="outline"
                  type="email"
                  placeholder="Enter your email"
                  icon="i-lucide-at-sign"
                  :color="errors.email ? 'error' : undefined"
                />
                <template #hint>
                  <p
                    :class="
                      errors.email
                        ? 'text-red-500 text-xs mt-1'
                        : 'text-gray-400 text-xs mt-1'
                    "
                  >
                    {{ errors.email || "Your email address" }}
                  </p>
                </template>
              </UFormField>
            </div>

            <!-- Password field -->
            <div class="mb-4">
              <UFormField label="Password" size="xl">
                <UInput
                  v-model="values.password"
                  v-bind="passwordAttrs"
                  class="w-full"
                  variant="outline"
                  type="password"
                  placeholder="Create a password"
                  icon="i-lucide-lock"
                  :color="errors.password ? 'error' : undefined"
                />
                <template #hint>
                  <p
                    :class="
                      errors.password
                        ? 'text-red-500 text-xs mt-1'
                        : 'text-gray-400 text-xs mt-1'
                    "
                  >
                    {{ errors.password || "Password must be at least 8 characters with one uppercase letter and one number" }}
                  </p>
                </template>
              </UFormField>
            </div>

            <!-- Password Confirmation field -->
            <div class="mb-4">
              <UFormField label="Confirm Password" size="xl">
                <UInput
                  v-model="values.passwordConfirmation"
                  v-bind="passwordConfirmationAttrs"
                  class="w-full"
                  variant="outline"
                  type="password"
                  placeholder="Confirm your password"
                  icon="i-lucide-check-circle"
                  :color="errors.passwordConfirmation ? 'error' : undefined"
                />
                <template #hint>
                  <p
                    :class="
                      errors.passwordConfirmation
                        ? 'text-red-500 text-xs mt-1'
                        : 'text-gray-400 text-xs mt-1'
                    "
                  >
                    {{ errors.passwordConfirmation || "Confirm your password" }}
                  </p>
                </template>
              </UFormField>
            </div>

            <button
              type="submit"
              class="w-full mt-4 px-4 py-2 text-white font-medium bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-600 rounded-lg duration-150"
              :disabled="isSubmitting || loading"
            >
              {{ isSubmitting || loading ? "Creating account..." : "Create Account" }}
            </button>
          </form>

          <div class="relative">
            <span class="block w-full h-px bg-gray-300"></span>
            <p class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or sign up with
            </p>
          </div>

          <div class="space-y-4 text-sm font-medium">
            <!-- Google Button -->
            <button class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
                alt="Google"
                class="w-5 h-5"
              />
              Continue with Google
            </button>
            
            <!-- Twitter Button -->
            <button class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg"
                alt="Twitter"
                class="w-5 h-5"
              />
              Continue with Twitter
            </button>
            
            <!-- Github Button -->
            <button class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg"
                alt="Github"
                class="w-5 h-5"
              />
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>