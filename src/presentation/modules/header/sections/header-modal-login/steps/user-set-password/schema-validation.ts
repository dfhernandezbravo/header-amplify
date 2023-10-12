import * as yup from 'yup';

const userPasswordSchema = yup.object({
  accessKey: yup.string().required('Campo requerido'),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      'Su contraseña debe contener: 8 caracteres, números, letras minúsculas y mayúsculas',
    )
    .required('Campo Requerido'),
  confirmPassword: yup
    .string()
    .required('Campo requerido')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  isTYC: yup
    .boolean()
    .oneOf([true], 'Debes aceptar terminos y condiciones')
    .default(false),
});

export default userPasswordSchema;
