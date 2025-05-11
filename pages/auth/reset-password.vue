<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const loading = ref(false);
const error = ref('');
const success = ref(false);

// Get token from route query params
const token = ref(route.query.token as string || '');

// Form values
const password = ref('');
const passwordConfirmation = ref('');

// Error states
const tokenError = ref('');
const passwordError = ref('');
const passwordConfirmationError = ref('');

const validateForm = () => {
  // Reset error states
  passwordError.value = '';
  passwordConfirmationError.value = '';
  tokenError.value = '';
  error.value = '';
  
  let isValid = true;
  
  // Validate token
  if (!token.value) {
    tokenError.value = 'Reset token is missing';
    error.value = 'Invalid or expired password reset link. Please request a new one.';
    isValid = false;
  }
  
  // Validate password
  if (!password.value) {
    passwordError.value = 'Password is required';
    isValid = false;
  } else if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters';
    isValid = false;
  }
  
  // Validate password confirmation
  if (!passwordConfirmation.value) {
    passwordConfirmationError.value = 'Please confirm your password';
    isValid = false;
  } else if (password.value !== passwordConfirmation.value) {
    passwordConfirmationError.value = 'Passwords do not match';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }
  
  loading.value = true;
  
  try {
    // TODO: Replace with actual API call
    // const response = await $fetch('/api/auth/reset-password', {
    //   method: 'POST',
    //   body: {
    //     token: token.value,
    //     password: password.value,
    //     password_confirmation: passwordConfirmation.value
    //   }
    // });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success state
    success.value = true;
    
    // Clear form
    password.value = '';
    passwordConfirmation.value = '';
  } catch (err: any) {
    error.value = err.message || 'An error occurred while resetting your password. Please try again.';
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  router.push('/auth/login');
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900">Reset your password</h2>
          <p v-if="!success" class="mt-2 text-sm text-gray-600">
            Create a new secure password for your account
          </p>
        </div>
      </template>
      
      <div class="mt-2">
        <template v-if="!success">
          <UAlert v-if="error" type="danger" :description="error" class="mb-4" />
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <UFormGroup label="New Password" name="password" :error="passwordError">
                <UInput
                  v-model="password"
                  type="password"
                  placeholder="Enter your new password"
                  size="lg"
                  :error="!!passwordError"
                  autocomplete="new-password"
                />
                <template #hint>
                  <p class="text-xs text-gray-500">
                    Password must be at least 8 characters
                  </p>
                </template>
              </UFormGroup>
            </div>
            
            <div>
              <UFormGroup label="Confirm New Password" name="passwordConfirmation" :error="passwordConfirmationError">
                <UInput
                  v-model="passwordConfirmation"
                  type="password"
                  placeholder="Confirm your new password"
                  size="lg"
                  :error="!!passwordConfirmationError"
                  autocomplete="new-password"
                />
              </UFormGroup>
            </div>
            
            <div>
              <UButton
                type="submit"
                block
                size="lg"
                :loading="loading"
                :disabled="loading"
              >
                Reset Password
              </UButton>
            </div>
          </form>
        </template>
        
        <template v-else>
          <UAlert
            type="success"
            title="Password reset successful!"
            description="Your password has been reset successfully. You can now log in with your new password."
            class="mb-4"
          />
          
          <UButton
            block
            size="lg"
            @click="goToLogin"
          >
            Go to Login
          </UButton>
        </template>
      </div>
      
      <template #footer>
        <div class="flex justify-center">
          <NuxtLink to="/auth/login" class="text-sm font-medium text-primary-600 hover:text-primary-500">
            Back to login
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>