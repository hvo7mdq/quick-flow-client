import * as yup from 'yup'

let loginSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Email is required"),
    password: yup.string().required("Enter password")
})


export default loginSchema;