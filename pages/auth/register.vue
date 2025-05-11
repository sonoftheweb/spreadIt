<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

// Define validation schema with Zod
const schema = z
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
  });

// Define type from schema
type Schema = z.output<typeof schema>;

// Define form state as reactive
const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  password: undefined,
  passwordConfirmation: undefined,
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data);
  try {
    const response = await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        name: event.data.name,
        email: event.data.email,
        password: event.data.password,
      },
    });

    if (response.status === "error") {
      throw new Error(response.message || "Registration failed");
    }

    navigateTo({ path: "/auth/login", query: { registered: "true" } });
  } catch (error) {
    console.error("Registration error:", error);
  }
};
</script>

<template>
  <div class="flex p-3 w-screen h-screen bg-cyan-900">
    <div class="md:w-1/2 hidden md:block">Some expanded content</div>
    <div class="md:w-1/2 w-full rounded-lg bg-white">
      <div class="w-full h-full flex flex-col items-center justify-center px-4">
        <div class="max-w-sm w-full text-gray-600 space-y-8">
          <div class="text-center">
            <div class="mt-5 space-y-2">
              <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create your account
              </h3>
              <p class="">
                Already have an account?
                <a
                  class="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer"
                  @click="navigateTo('/auth/login')"
                  >Sign in</a
                >
              </p>
            </div>
          </div>

          <UForm :schema="schema" :state="state" @submit="onSubmit">
            <div class="mb-4">
              <UFormField label="Full Name" name="name" size="xl">
                <UInput
                  v-model="state.name"
                  class="w-full"
                  variant="outline"
                  placeholder="Enter your full name"
                  icon="i-lucide-user"
                />
              </UFormField>
            </div>

            <div class="mb-4">
              <UFormField label="Email" name="email" size="xl" description="We'll never share your email with anyone else.">
                <UInput
                  v-model="state.email"
                  class="w-full"
                  variant="outline"
                  placeholder="Enter your email"
                  icon="i-lucide-at-sign"
                />
              </UFormField>
            </div>

            <div class="mb-4">
              <UFormField label="Password" name="password" size="xl">
                <UInput
                  v-model="state.password"
                  class="w-full"
                  variant="outline"
                  type="password"
                  placeholder="Create a password"
                  icon="i-lucide-lock"
                />
              </UFormField>
            </div>

            <div class="mb-4">
              <UFormField
                label="Confirm Password"
                name="passwordConfirmation"
                size="xl"
              >
                <UInput
                  v-model="state.passwordConfirmation"
                  class="w-full"
                  variant="outline"
                  type="password"
                  placeholder="Confirm your password"
                  icon="i-lucide-check-circle"
                />
              </UFormField>
            </div>

            <UButton type="submit" block size="lg"> Create Account </UButton>
          </UForm>

          <div class="relative">
            <span class="block w-full h-px bg-gray-300"></span>
            <p
              class="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto"
            >
              Or sign up with
            </p>
          </div>

          <div class="space-y-4 text-sm font-medium">
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
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-error {
  font-size: 12px !important;
}
</style>
