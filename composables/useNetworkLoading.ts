import { ref, readonly } from 'vue';

// Create a global state to track loading status
const isLoading = ref(false);
const pendingRequests = ref(0);

export function useNetworkLoading() {
  // Start a network request
  const startLoading = () => {
    pendingRequests.value++;
    isLoading.value = true;
  };

  // End a network request
  const endLoading = () => {
    pendingRequests.value = Math.max(0, pendingRequests.value - 1);
    if (pendingRequests.value === 0) {
      isLoading.value = false;
    }
  };

  // Reset loading state
  const resetLoading = () => {
    pendingRequests.value = 0;
    isLoading.value = false;
  };

  return {
    isLoading: readonly(isLoading),
    startLoading,
    endLoading,
    resetLoading
  };
}