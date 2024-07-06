<template>
  <label :for="id" class="input__label">
    {{ label }}
    <span v-if="required" class="input__label--required">*</span>
  </label>
  <input
    :id="id"
    class="input__field"
    :class="{ 'input__field--error': error }"
    :value="internalValue"
    :type="type"
    @input="updateValue"
  />
  <span
    v-if="errorMessage.length > 0 || caption.length > 0"
    class="input__caption"
    :class="{ 'input__caption--error': error }"
  >
    {{ errorMessage || caption }}
  </span>
</template>

<script>
import { ref, watch, toRefs } from 'vue'

export default {
  props: {
    modelValue: {
      type: [String],
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'text',
      required: true
    },
    label: {
      type: String,
      default: '',
      required: true
    },
    id: {
      type: String,
      default: '',
      required: true
    },
    caption: {
      type: String,
      default: '',
      required: false
    },
    error: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMessage: {
      type: String,
      default: '',
      required: false
    },
    required: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const internalValue = ref(modelValue.value)

    watch(modelValue, (newValue) => {
      internalValue.value = newValue
    })

    const updateValue = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return { internalValue, updateValue }
  }
}
</script>

<style lang="scss" scoped>
.input {
  &__label {
    display: block;
    color: $white;
    font-size: $font-size-md;
    line-height: $line-height-md;
    font-weight: $font-weight-600;

    &--required {
      color: $red;
    }
  }

  &__field {
    width: 100%;
    padding: 1rem 1.5rem;
    border: none;
    outline: 1px solid $border-neutral;
    border-radius: 0.5rem;
    background-color: $bg-primary;
    color: $white;
    font-size: $font-size-lg;
    line-height: $line-height-lg;
    transition: outline 0.15s ease-in-out;

    &:hover {
      outline: 2px solid $border-tertiary;
    }

    &:focus,
    &:focus-visible {
      outline: 2px solid $border-secondary;
    }

    &--error {
      outline: 2px solid $border-critical;
    }
  }

  &__caption {
    display: block;
    color: $content-tertiary;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
    font-weight: $font-weight-500;

    &--error {
      color: $critical;
    }
  }
}
</style>
