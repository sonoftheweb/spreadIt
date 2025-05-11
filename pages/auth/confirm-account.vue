<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const loading = ref(true);
const error = ref('');
const success = ref(false);

// Get token from route query params
const token = ref(route.query.token as string || '');

const confirmAccount = async () => {
  try {
    if (!token.value) {
      error.value = 'Invalid or missing confirmation token. Please check your email for the correct link.';
      loading.value = false;
      return;
    }

    // TODO: Replace with actual API call
    // const response = await $fetch('/api/auth/confirm-account', {
    //   method: 'POST',
    //   body: {
    //     token: token.value
    //   }
    // });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    success.value = true;
    error.value = '';
  } catch (err: any) {
    error.value = err.message || 'An error occurred while confirming your account. Please try again.';
    success.value = false;
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  router.push('/auth/login');
};

onMounted(() => {
  confirmAccount();
});
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900">Account Confirmation</h2>
        </div>
      </template>
      
      <div class="mt-4 text-center">
        <div v-if="loading" class="py-8">
          <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 mx-auto text-primary-500 mb-4" />
          <p class="text-gray-600">Confirming your account...</p>
        </div>
        
        <template v-else-if="success">
          <UIcon name="i-heroicons-check-circle" class="h-16 w-16 mx-auto text-green-500 mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-2">Account Confirmed!</h3>
          <p class="text-gray-600 mb-6">
            Your email has been verified successfully. You can now sign in to your account.
          </p>
          
          <UButton
            block
            size="lg"
            @click="goToLogin"
          >
            Sign In
          </UButton>
        </template>
        
        <template v-else>
          <UIcon name="i-heroicons-x-circle" class="h-16 w-16 mx-auto text-red-500 mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-2">Confirmation Failed</h3>
          <UAlert type="danger" :description="error" class="mb-6" />
          
          <div class="space-y-3">
            <p class="text-gray-600">
              If you're having trouble confirming your account, please try requesting a new confirmation link.
            </p>
            
            <UButton
              variant="outline"
              block
              size="lg"
              @click="goToLogin"
            >
              Back to Sign In
            </UButton>
          </div>
        </template>
      </div>
      
      <template #footer>
        <p class="text-center text-sm text-gray-600">
          Need help? <a href="#" class="font-medium text-primary-600 hover:text-primary-500">Contact Support</a>
        </p>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>