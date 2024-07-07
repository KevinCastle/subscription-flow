<template>
  <article class="success">
    <img src="../assets/Check.svg" alt="¡Todo listo!" width="100" height="85" />
    <div>
      <div class="success__content">
        <p class="success__content__title">¡Muy bien!</p>
        <p class="success__content__subtitle">
          Tu suscripción a Zapping está lista, ya puedes comenzar a ver TV.
        </p>
      </div>
      <ButtonInput
        type="button"
        variant="outline"
        label="Ir a editar medio de pago"
        text="Editar medio de pago"
        class="success__edit-payment"
        disabled
      />
    </div>
  </article>
</template>

<script>
import { onMounted } from 'vue'
import useUserStore from '../stores/useUserStore'
import ButtonInput from '../components/ButtonInput.vue'

export default {
  components: {
    ButtonInput
  },
  setup() {
    const userStore = useUserStore()

    onMounted(async () => {
      userStore.setFinished(true)
      // if (!name.value) {
      //   router.push('/')
      // }
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>
.success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  min-height: 700px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    margin-top: 5rem;

    &__title {
      font-size: $font-size-heading;
      line-height: $line-height-heading;
      font-weight: $font-weight-700;
      color: $content-primary;
    }

    &__subtitle {
      font-size: $font-size-md;
      line-height: $line-height-md;
      font-weight: $font-weight-500;
      color: $tertiary;
    }
  }

  &__edit-payment {
    margin-top: 3rem;
    width: 100%;
  }
}
</style>
