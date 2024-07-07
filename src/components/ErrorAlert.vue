<template>
  <div v-if="errorMessage" class="error-alert">
    {{ errorMessage }}
  </div>
</template>

<script>
import { computed } from 'vue'
import useUserStore from '../stores/useUserStore'

export default {
  setup() {
    const userStore = useUserStore()
    const errorMessage = computed(() => userStore.error)

    return {
      errorMessage
    }
  }
}
</script>

<style lang="scss" scoped>
.error-alert {
  position: fixed;
  bottom: 0;
  right: 0;
  width: fit-content;
  background-color: $critical;
  color: $content-primary;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  margin: 1rem;
}
</style>
