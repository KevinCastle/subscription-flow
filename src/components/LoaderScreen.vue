<template>
  <transition name="fade" mode="out-in">
    <article v-if="loading" class="loader-screen">
      <div class="loader-screen__circle">
        <div class="loader-screen__circle__container">
          <SmallLogoComponent />
        </div>
      </div>
      <SlidingText />
    </article>
  </transition>
</template>

<script>
import { computed } from 'vue'
import useUserStore from '../stores/useUserStore'
import SmallLogoComponent from './SmallLogoComponent.vue'
import SlidingText from './SlidingText.vue'

export default {
  components: {
    SmallLogoComponent,
    SlidingText
  },
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
.loader-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: $bg-primary;

  &__circle {
    position: relative;
    background: $linear-gradient-red;
    padding: 4px;
    border-radius: 50%;
    width: 190px;
    height: 190px;
    margin-bottom: 5rem;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: $dark-900;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: transparent;
      border: 0.75px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      animation: growAndFade 2s infinite ease-in-out;
    }
  }

  @keyframes growAndFade {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  @media (min-width: 480px) {
    border-radius: 1rem;
  }
}
</style>
