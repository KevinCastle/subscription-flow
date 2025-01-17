<template>
  <article class="confirmation">
    <h2 class="confirmation__title">{{ $t('confirmation.title') }}</h2>
    <Card>
      <div class="confirmation__user--email">
        <span class="confirmation__label">{{ $t('confirmation.email.label') }}</span>
        <p class="confirmation__subtitle">{{ email }}</p>
      </div>
      <div class="confirmation__user">
        <span class="confirmation__label">{{ $t('confirmation.name.label') }}</span>
        <p class="confirmation__small">{{ name }} {{ lastName }}</p>
      </div>
      <div class="confirmation__user">
        <span class="confirmation__label">{{ $t('confirmation.region.label') }}</span>
        <p class="confirmation__small">{{ region }}</p>
      </div>
    </Card>
    <Card>
      <p class="confirmation__subtitle">{{ $t('confirmation.plan.title') }}</p>
      <div class="confirmation__price">
        <p class="confirmation__subtitle">{{ $t('confirmation.plan.price') }}</p>
        <span class="confirmation__xs">/{{ $t('confirmation.plan.duration') }}</span>
        <div class="confirmation__badge">{{ $t('confirmation.badge.title') }}</div>
      </div>
      <p class="confirmation__xs">
        {{ $t('confirmation.plan.description') }}
      </p>
      <div class="confirmation__trial">
        <div class="confirmation__trial__container">
          <div>
            <p class="confirmation__xs">{{ $t('confirmation.trial.title') }}</p>
            <p class="confirmation__subtitle--gradient">
              {{ $t('confirmation.trial.description') }}
            </p>
            <p class="confirmation__xs">{{ $t('confirmation.trial.duration') }}</p>
          </div>
          <p class="confirmation__subtitle--regular">{{ $t('confirmation.trial.price') }}</p>
        </div>
      </div>
      <hr />
      <div class="confirmation__payment-method">
        <span class="confirmation__label">{{ $t('confirmation.paymentMethod.title') }}</span>
        <img
          class="confirmation__mastercard"
          src="../assets/Mastercard.svg"
          alt="Mastercard"
          width="35"
          height="24"
        />
        <p class="confirmation__small">*** 123</p>
      </div>
      <ButtonInput
        type="button"
        variant="outline"
        :label="$t('confirmation.paymentMethod.button.label')"
        :text="$t('confirmation.paymentMethod.button.text')"
        class="confirmation__edit-payment"
        :disabled="true"
      />
    </Card>
    <div class="justify-between">
      <p class="confirmation__title">{{ $t('confirmation.total.title') }}</p>
      <p class="confirmation__title">$0</p>
    </div>
    <p class="confirmation__xs">
      {{ $t('confirmation.terms') }}
    </p>
    <ButtonInput
      type="button"
      variant="primary"
      :label="$t('confirmation.submit.label')"
      :text="$t('confirmation.submit.text')"
      @click="confirmSubscription"
    />
  </article>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Card from '../components/CardComponent.vue'
import ButtonInput from '../components/ButtonInput.vue'
import useUserStore from '../stores/useUserStore'

export default {
  components: {
    Card,
    ButtonInput
  },
  setup() {
    const userStore = useUserStore()
    const name = computed(() => userStore.name)
    const lastName = computed(() => userStore.lastName)
    const email = computed(() => userStore.email)
    const region = computed(() => userStore.region)
    const router = useRouter()

    onMounted(async () => {
      if (!name.value) {
        router.push('/')
      }
    })

    const confirmSubscription = () => {
      userStore.setLoading(true)
      setTimeout(() => {
        router.push('/success')
        userStore.setLoading(false)
        userStore.setFinished(true)
      }, 12000)
    }

    return { name, lastName, email, region, confirmSubscription }
  }
}
</script>

<style lang="scss" scoped>
.confirmation {
  display: grid;
  gap: 1.5rem;

  hr {
    border: 1px solid #ffffff0d;
  }

  .justify-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: $content-primary;
    font-size: $font-size-heading;
    line-height: $line-height-heading;
    font-weight: $font-weight-700;
    text-align: center;
  }

  &__subtitle {
    color: $content-primary;
    font-size: $font-size-lg;
    line-height: $line-height-lg;
    font-weight: $font-weight-600;

    &--gradient {
      background: $linear-gradient-red;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: $font-weight-500;
      padding: 0.625rem 0;
    }

    &--regular {
      font-weight: $font-weight-500;
    }
  }

  &__label {
    color: $tertiary;
    font-size: $font-size-md;
    line-height: $line-height-md;
    font-weight: $font-weight-500;
  }

  &__small {
    @extend .confirmation__label;
    display: block;
    color: $content-primary;
  }

  &__xs {
    @extend .confirmation__label;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
  }

  &__user {
    padding-bottom: 0.75rem;
    &--email {
      padding-bottom: 1.5rem;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  &__badge {
    background-color: $violet;
    color: $content-primary;
    font-size: $font-size-md;
    line-height: $line-height-md;
    font-weight: $font-weight-400;
    padding: 0.5rem 0.375rem;
    border-radius: 0.188rem;
  }

  &__trial {
    margin: 1.5rem 0;
    background: $linear-gradient-red;
    padding: 1px;
    border-radius: 0.5rem;

    &__container {
      @extend .justify-between;
      background: $dark-900;
      border-radius: 0.5rem;
      padding: 0.75rem;
    }
  }

  &__payment-method {
    @extend .justify-between;
    padding-top: 1.5rem;
  }

  &__mastercard {
    margin-left: auto;
    margin-right: 0.5rem;
  }

  &__edit-payment {
    margin-top: 1.5rem;
    width: 100%;
  }
}
</style>
