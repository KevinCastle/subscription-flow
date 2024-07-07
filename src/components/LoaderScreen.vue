<template>
  <Transition name="fade" mode="out-in">
    <div v-if="loading" class="loading-screen">
      <p>cargando datos</p>
      <div class="loading-screen__loader" />
    </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'
import useUserStore from '../stores/useUserStore'

export default {
  setup() {
    const userStore = useUserStore()
    const loading = computed(() => userStore.loading)

    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loading-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $content-primary;

  &__loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: $yellow;
    box-shadow:
      -24px 0 $yellow,
      24px 0 $yellow;
    box-sizing: border-box;
    animation: dots 2s linear infinite;
  }

  @keyframes dots {
    33% {
      background: $yellow;
      box-shadow:
        -24px 0 $red,
        24px 0 $yellow;
    }
    66% {
      background: $red;
      box-shadow:
        -24px 0 $yellow,
        24px 0 $yellow;
    }
    100% {
      background: $yellow;
      box-shadow:
        -24px 0 $yellow,
        24px 0 $red;
    }
  }
}
</style>
