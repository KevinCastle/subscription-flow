<template>
  <button :type="type" :aria-label="label" :disabled="disabled" class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    type: {
      type: String,
      default: 'button',
      required: false
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 32px;
  padding: 0.75rem 1.5rem;
  width: 100%;
  background-color: $button-primary-background-default;
  color: $white;
  font-size: $font-size-lg;
  line-height: $line-height-lg;
  font-weight: $font-weight-600;
  transition:
    background-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    background-color: $button-primary-background-hover;
  }

  &:active {
    background-color: $button-primary-background-active;
  }

  &:disabled {
    background-color: $button-neutral-background-disabled;
    color: $neutral;
    cursor: not-allowed;
  }
}
</style>
