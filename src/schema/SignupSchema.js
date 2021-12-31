import * as yup from 'yup'

let signupSchema = yup.object().shape({
    first_name: yup.string().required("Enter first name"),
    last_name: yup.string().required("Enter last name"),
    email: yup.string().email("Enter valid email").required("Email is required"),
    password: yup.string().required("Enter password"),
    password2: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        )
      })
})


export default signupSchema;