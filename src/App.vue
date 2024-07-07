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
          class="help-button"
        />
      </header>
      <RouterView />
    </section>
  </main>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoCoponent from './components/LogoComponent.vue'
import ButtonInput from './components/ButtonInput.vue'

export default {
  components: {
    LogoCoponent,
    ButtonInput
  },
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
