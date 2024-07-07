<template>
  <main>
    <section class="container">
      <header>
        <LogoCoponent />
        <ButtonInput
          label="Solicitar ayuda"
          text="Ayuda"
          variant="neutral"
          type="link"
          href="https://www.zapping.com/ayuda"
          target="_blank"
          rel="noopener noreferrer"
          class="button--small help-button"
        />
      </header>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <LoaderScreen />
    </section>
    <ErrorAlert />
  </main>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoCoponent from './components/LogoComponent.vue'
import ButtonInput from './components/ButtonInput.vue'
import ErrorAlert from './components/ErrorAlert.vue'
import LoaderScreen from './components/LoaderScreen.vue'

export default {
  components: {
    LogoCoponent,
    ButtonInput,
    ErrorAlert,
    LoaderScreen
  },
  setup() {
    return {
      RouterLink,
      RouterView
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
}

main {
  display: flex;
  align-items: flex-start;
  background-color: $bg-primary;
  height: 100%;
  min-height: 100vh;

  @media (min-width: 480px) {
    background: $linear-gradient-dark;
    align-items: center;
  }
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 480px) {
    padding: 3rem 2rem;
    margin: 1rem auto;
    background: $bg-primary;
    height: fit-content;
    border-radius: 1rem;
  }
}

.help-button {
  width: fit-content;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
