<script setup lang="ts">
import { useNetworkLoading } from '~/composables/useNetworkLoading';

const { isLoading } = useNetworkLoading();
</script>

<template>
  <div>
    <LoadingBar :loading="isLoading" />
    <slot />
  </div>
</template>

<style scoped></style>