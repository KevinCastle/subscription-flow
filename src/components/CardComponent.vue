<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $dark-500;
  color: $content-primary;
  border: 1px solid #ffffff0d;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: border 0.15s ease-in-out;

  &:hover {
    border-color: #ffffff1a;
  }
}
</style>
