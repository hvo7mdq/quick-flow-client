import * as yup from 'yup'

let recoverSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Email is required"),
})


export default recoverSchema;