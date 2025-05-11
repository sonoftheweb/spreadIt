<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const error = ref('');

// Form values
const email = ref('');
const password = ref('');
const remember = ref(false);

// Error states
const emailError = ref('');
const passwordError = ref('');

const validateForm = () => {
  // Reset error states
  emailError.value = '';
  passwordError.value = '';
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
  
  // Validate password
  if (!password.value) {
    passwordError.value = 'Password is required';
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
    // const response = await $fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: {
    //     email: email.value.trim(),
    //     password: password.value,
    //     remember: remember.value
    //   }
    // });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear form
    email.value = '';
    password.value = '';
    remember.value = false;
    
    // Redirect to dashboard
    router.push('/');
  } catch (err: any) {
    error.value = err.message || 'Invalid email or password. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900">Sign in to your account</h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            <NuxtLink to="/auth/register" class="font-medium text-primary-600 hover:text-primary-500">
              create a new account
            </NuxtLink>
          </p>
        </div>
      </template>
      
      <div class="mt-2">
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
            <UFormGroup label="Password" name="password" :error="passwordError">
              <UInput
                v-model="password"
                type="password"
                placeholder="Enter your password"
                size="lg"
                :error="!!passwordError"
                autocomplete="current-password"
              />
              <template #hint>
                <div class="flex justify-end">
                  <NuxtLink 
                    to="/auth/forgot-password" 
                    class="text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    Forgot your password?
                  </NuxtLink>
                </div>
              </template>
            </UFormGroup>
          </div>
          
          <div class="flex items-center justify-between">
            <UCheckbox v-model="remember" name="remember" label="Remember me" />
          </div>
          
          <div>
            <UButton
              type="submit"
              block
              size="lg"
              :loading="loading"
              :disabled="loading"
            >
              Sign in
            </UButton>
          </div>
        </form>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>