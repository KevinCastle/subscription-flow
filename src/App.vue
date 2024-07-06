<template>
  <main class="bg-primary">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  setup() {
    return {
      RouterLink,
      RouterView
    }
  }
}
</script>

<style>
@import '@/styles/index.scss';
</style>
