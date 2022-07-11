import * as Yup from "yup"; 

export const LoginValidation = Yup.object({
    email: Yup.string().email('invalid email address').required('email required'),
    password: Yup.string().required('password required').trim()
});