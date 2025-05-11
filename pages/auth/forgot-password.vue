<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const error = ref('');
const success = ref(false);

// Form values
const email = ref('');

// Error states
const emailError = ref('');

const validateForm = () => {
  // Reset error states
  emailError.value = '';
  error.value = '';
  
  let isValid = true;
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.value = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.value = 'Please enter a valid email address';
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
    // const response = await $fetch('/api/auth/forgot-password', {
    //   method: 'POST',
    //   body: {
    //     email: email.value.trim(),
    //   }
    // });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    success.value = true;
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.';
    success.value = false;
  } finally {
    loading.value = false;
  }
};

const handleReturnToLogin = () => {
  router.push('/auth/login');
};

const resetForm = () => {
  success.value = false;
  email.value = '';
  error.value = '';
  emailError.value = '';
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900">Forgot your password?</h2>
          <p v-if="!success" class="mt-2 text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
      </template>
      
      <div class="mt-2">
        <template v-if="!success">
          <UAlert v-if="error" type="danger" :description="error" class="mb-4" />
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <UFormGroup label="Email address" name="email" :error="emailError">
                <UInput
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  size="lg"
                  :error="!!emailError"
                  autocomplete="email"
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
                Send Reset Link
              </UButton>
            </div>
          </form>
        </template>
        
        <template v-else>
          <UAlert
            type="success"
            title="Reset link sent!"
            description="We've sent an email with password reset instructions to your inbox. Please check your email."
            class="mb-4"
          />
          
          <div class="space-y-3">
            <UButton
              block
              size="lg"
              @click="resetForm"
            >
              Send to another email
            </UButton>
            
            <UButton
              block
              size="lg"
              variant="outline"
              @click="handleReturnToLogin"
            >
              Return to login
            </UButton>
          </div>
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