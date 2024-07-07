<template>
  <div>
    <form class="subscription-form" @submit.prevent="onSubmit">
      <TextInput
        id="email"
        v-model="email"
        :label="$t('subscriptionForm.email.label')"
        type="email"
        :caption="$t('subscriptionForm.email.caption')"
        :placeholder="$t('subscriptionForm.email.placeholder')"
        :error="!!errors.email"
        :error-message="errors.email"
        class="subscription-form__email"
      />
      <TextInput
        id="name"
        v-model="name"
        :label="$t('subscriptionForm.name.label')"
        :caption="$t('subscriptionForm.name.caption')"
        :placeholder="$t('subscriptionForm.name.placeholder')"
        type="text"
        :error="!!errors.name"
        :error-message="errors.name"
      />
      <TextInput
        id="lastname"
        v-model="lastName"
        :label="$t('subscriptionForm.lastName.label')"
        :caption="$t('subscriptionForm.lastName.caption')"
        :placeholder="$t('subscriptionForm.lastName.placeholder')"
        type="text"
        :error="!!errors.lastName"
        :error-message="errors.lastName"
      />
      <TextInput
        id="rut"
        v-model="rut"
        :label="$t('subscriptionForm.rut.label')"
        :caption="$t('subscriptionForm.rut.caption')"
        :placeholder="$t('subscriptionForm.rut.placeholder')"
        type="text"
        :error="!!errors.rut"
        :error-message="errors.rut"
      />
      <SelectInput
        id="region"
        v-model="region"
        :label="$t('subscriptionForm.region.label')"
        :caption="$t('subscriptionForm.region.caption')"
        :placeholder="$t('subscriptionForm.region.placeholder')"
        :options="regions"
        :error="!!errors.region"
        :error-message="errors.region"
      />
      <TextInput
        id="password"
        v-model="password"
        type="password"
        :label="$t('subscriptionForm.password.label')"
        :caption="$t('subscriptionForm.password.caption')"
        :placeholder="$t('subscriptionForm.password.placeholder')"
        :error="!!errors.password"
        :error-message="errors.lastName"
      />
      <TextInput
        id="passwordConfirm"
        v-model="passwordConfirm"
        type="password"
        :label="$t('subscriptionForm.passwordConfirm.label')"
        :caption="$t('subscriptionForm.passwordConfirm.caption')"
        :placeholder="$t('subscriptionForm.passwordConfirm.placeholder')"
        :error="!!errors.passwordConfirm"
        :error-message="errors.passwordConfirm"
      />
      <ButtonInput
        type="submit"
        variant="primary"
        :label="$t('subscriptionForm.submit.label')"
        :text="$t('subscriptionForm.submit.text')"
        class="subscription-form__submit"
        :disabled="isFormValid"
      />
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import TextInput from '../components/TextInput.vue'
import SelectInput from '../components/SelectInput.vue'
import ButtonInput from '../components/ButtonInput.vue'
import rutValidation from '../helpers/rutValidation'
import useUserStore from '../stores/useUserStore'

export default {
  components: {
    TextInput,
    SelectInput,
    ButtonInput
  },
  setup() {
    const userStore = useUserStore()
    const regions = computed(() => userStore.regions)
    const validatedForm = ref(false)
    const router = useRouter()

    onMounted(async () => {
      await userStore.getRegions()
    })

    const validationSchema = yup.object({
      email: yup
        .string()
        .matches(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          'Ingresa un correo válido para crear tu cuenta Zapping'
        )
        .required('El correo electrónico es requerido'),
      name: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'El nombre solo debe contener letras')
        .required('El nombre es requerido'),
      lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'El apellido solo debe contener letras')
        .required('El apellido es requerido'),
      rut: rutValidation,
      region: yup.string().required('La región es requerida'),
      password: yup
        .string()
        .min(8, 'La contraseña debe ser al menos de 8 dígitos, que incluya números y letras')
        .matches(
          /(?=.*[a-zA-Z])(?=.*[0-9])/,
          'La contraseña debe ser al menos de 8 dígitos, que incluya números y letras'
        )
        .required('La contraseña es requerida'),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
        .required('La confirmación de la contraseña es requerida')
    })

    const { handleSubmit, errors } = useForm({
      validationSchema
    })

    const { value: email } = useField('email')
    const { value: name } = useField('name')
    const { value: lastName } = useField('lastName')
    const { value: rut } = useField('rut')
    const { value: region } = useField('region')
    const { value: password } = useField('password')
    const { value: passwordConfirm } = useField('passwordConfirm')

    const isFormValid = computed(() => {
      const hasErrors = Object.keys(errors.value).length > 0

      const allFieldsFilled =
        email.value &&
        name.value &&
        lastName.value &&
        rut.value &&
        region.value &&
        password.value &&
        passwordConfirm.value

      return !(!hasErrors && allFieldsFilled)
    })

    const getRegionByCode = (code) => {
      return regions.value.find((regionObject) => regionObject.codigo === code).nombre
    }

    const onSubmit = handleSubmit((values) => {
      userStore.setEmail(values.email)
      userStore.setName(values.name)
      userStore.setLastName(values.lastName)
      userStore.setRegion(getRegionByCode(values.region))

      router.push('/confirmation')
    })

    return {
      email,
      name,
      lastName,
      rut,
      region,
      password,
      passwordConfirm,
      errors,
      onSubmit,
      regions,
      validatedForm,
      isFormValid
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-form {
  display: grid;
  gap: 12px;

  &__email {
    margin-bottom: 24px;
  }

  &__submit {
    margin-top: 48px;
    width: 100%;
  }
}
</style>
