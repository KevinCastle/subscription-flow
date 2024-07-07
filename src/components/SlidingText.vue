<template>
  <div class="sliding-text">
    <p class="sliding-text__title">{{ $t('loading.title') }}</p>
    <ul class="sliding-text__slider">
      <li class="sliding-text__slider__item sliding-text__slider__item--firt">
        {{ $t('loading.slider.first') }}
      </li>
      <li class="sliding-text__slider__item sliding-text__slider__item--second">
        {{ $t('loading.slider.second') }}
      </li>
      <li class="sliding-text__slider__item sliding-text__slider__item--third">
        {{ $t('loading.slider.third') }}
      </li>
    </ul>
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
.sliding-text {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &__title {
    font-size: $font-size-lg;
    line-height: $line-height-lg;
    font-weight: $font-weight-500;
    color: $content-primary;
  }

  &__slider {
    margin-top: 0.5rem;

    &__item {
      opacity: 0;
      margin: 0 auto;
      list-style: none;
      position: absolute;
      width: 100%;
      font-size: $font-size-md;
      line-height: $line-height-md;
      font-weight: $font-weight-400;
      color: $tertiary;

      &--firt {
        animation: slideIn 12s forwards cubic-bezier(0.1, 0.67, 0.29, 0.98) infinite;
      }
      &--second {
        animation: slideIn 12s 4s forwards cubic-bezier(0.1, 0.67, 0.29, 0.98) infinite;
      }
      &--third {
        animation: slideIn 12s 8s forwards cubic-bezier(0.1, 0.67, 0.29, 0.98) infinite;
      }
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translate3d(0, 50%, 0);
    opacity: 0;
  }
  6.66% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  26.66% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  33.30% {
    transform: translate3d(0, -50%, 0);
    opacity: 0;
  }
  33.33% {
    transform: translate3d(0, 50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 50%, 0);
    opacity: 0;
  }
}
</style>
