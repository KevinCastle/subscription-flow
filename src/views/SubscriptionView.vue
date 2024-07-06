<template>
  <div>
    <form @submit.prevent="onSubmit"></form>
    <InputText
      id="email"
      v-model="email"
      label="Correo electrónico"
      type="email"
      caption="Ingresa un correo válido para crear tu cuenta Zapping"
      :error="!!errors.email"
      :error-message="errors.email"
    />
    <InputText
      id="name"
      v-model="name"
      label="Nombre"
      type="text"
      :error="!!errors.name"
      :error-message="errors.name"
    />
    <InputText
      id="lastname"
      v-model="lastName"
      label="Apellido"
      type="text"
      :error="!!errors.lastName"
      :error-message="errors.lastName"
    />
    <InputText
      id="rut"
      v-model="rut"
      label="RUT"
      type="text"
      :error="!!errors.rut"
      :error-message="errors.rut"
    />
    <InputText
      id="password"
      v-model="password"
      label="Crear una contraseña"
      type="text"
      caption="La contraseña debe ser al menos de 8 dígitos, que incluya números y letras"
      :error="!!errors.password"
      :error-message="errors.lastName"
    />
    <InputText
      id="passwordConfirm"
      v-model="passwordConfirm"
      label="Valida tu contraseña"
      type="text"
      :error="!!errors.passwordConfirm"
      :error-message="errors.passwordConfirm"
    />
    <button type="submit">Subscribe</button>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import InputText from '../components/InputText.vue'
import rutValidation from '../helpers/rutValidation'

export default {
  components: {
    InputText
  },
  setup() {
    const validationSchema = yup.object({
      email: yup
        .string()
        .email('Ingresa un correo válido para crear tu cuenta Zapping')
        .required('El correo electrónico es requerido'),
      name: yup.string().required('El nombre es requerido'),
      lastName: yup.string().required('El apellido es requerido'),
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

    const onSubmit = handleSubmit((values) => {
      // Handle form submission
      console.log(values)
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
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped></style>
