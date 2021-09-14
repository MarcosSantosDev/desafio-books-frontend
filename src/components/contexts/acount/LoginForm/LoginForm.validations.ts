import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const defaultValues = {
  email: '',
  password: '',
};
