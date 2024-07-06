import * as yup from 'yup'

const validateRut = (rut) => {
  const pattern = /^\d{7,8}-[0-9kK]$/
  return pattern.test(rut)
}

const rutValidation = yup
  .string()
  .required('El RUT es requerido')
  .test('is-valid-rut', 'Escriba el RUT sin puntos y con guión', validateRut)

export default rutValidation
