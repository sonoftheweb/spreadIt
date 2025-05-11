// Import the composable at the top level to ensure it's loaded
import { useNetworkLoading } from '~/composables/useNetworkLoading';

export default defineNuxtPlugin((nuxtApp) => {
  // Get loading methods from our composable
  const { startLoading, endLoading } = useNetworkLoading();

  // Intercept Nuxt page navigation
  nuxtApp.hook('page:start', () => {
    startLoading();
  });
  
  nuxtApp.hook('page:finish', () => {
    endLoading();
  });
  
  // Handle errors
  nuxtApp.hook('app:error', () => {
    endLoading();
  });
  
  // Intercept direct $fetch calls by overriding the global fetch
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async function (...args) {
    // Don't trigger loading for some internal requests
    const url = args[0]?.toString() || '';
    const isInternalRequest = 
      url.includes('/_nuxt/') || 
      url.includes('/__nuxt_devtools') ||
      url.includes('/.well-known/');
      
    if (!isInternalRequest) {
      startLoading();
    }
    
    try {
      const response = await originalFetch(...args);
      return response;
    } finally {
      if (!isInternalRequest) {
        endLoading();
      }
    }
  };
  
  // Also intercept $fetch from Nuxt
  const originalNuxtFetch = nuxtApp.$fetch;
  nuxtApp.$fetch = async function (...args) {
    startLoading();
    try {
      const response = await originalNuxtFetch(...args);
      return response;
    } finally {
      endLoading();
    }
  };
});