import * as Yup from 'yup';

const schemaObject = {
  email_format: 'Por favor informe um email válido',
  email_required: 'O campo email é obrigatório',
  password_required: 'O campo senha é obrigatório',
  password_min: 'A senha deve ter pelo menos 6 caracteres',
};

export const schema = Yup.object().shape({
  email: Yup.string()
    .email(schemaObject.email_format)
    .required(schemaObject.email_required),
  password: Yup.string()
    .required(schemaObject.password_required)
    .min(6, schemaObject.password_min),
});

export const defaultValues = {
  email: '',
  password: '',
};
