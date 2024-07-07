<template>
  <a
    v-if="type === 'link'"
    :href="href"
    :aria-label="label"
    :class="['button', `button--${variant}`]"
  >
    {{ text }}
  </a>
  <button
    v-else
    :type="type"
    :aria-label="label"
    :disabled="disabled"
    :class="['button', `button--${variant}`]"
  >
    {{ text }}
  </button>
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
    variant: {
      type: String,
      default: 'primary',
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
    },
    href: {
      type: String,
      default: '',
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
  color: $white;
  font-family: 'Poppins', sans-serif;
  font-size: $font-size-lg;
  line-height: $line-height-lg;
  font-weight: $font-weight-600;
  text-decoration: none;
  transition:
    background-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &--primary {
    background-color: $button-primary-background-default;

    &:hover {
      background-color: $button-primary-background-hover;
    }

    &:active {
      background-color: $button-primary-background-active;
    }

    &:disabled {
      background-color: $button-primary-background-disabled;
      color: $neutral;
      cursor: not-allowed;
    }
  }

  &--neutral {
    background-color: $button-neutral-background-default;

    &:hover {
      background-color: $button-neutral-background-hover;
    }

    &:active {
      background-color: $button-neutral-background-active;
    }
  }

  &--outline {
    background-color: transparent;
    outline: 1px solid $button-outline-border-default;
    transition: outline 0.15s ease-in-out;

    &:hover {
      outline: 2px solid $button-outline-border-hover;
    }

    &:active {
      outline: 2px solid $button-outline-border-active;
    }
    &:disabled {
      outline-color: $button-outline-border-disabled;
      color: $neutral;
      cursor: not-allowed;
    }
  }

  &--small {
    padding: 0.5rem 0.75rem;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
    font-weight: $font-weight-500;
  }
}
</style>
