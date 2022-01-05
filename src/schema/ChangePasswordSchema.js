import * as yup from 'yup'

let changePasswordSchema = yup.object().shape({
    password: yup.string().required("Enter password"),
    password2: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
          [yup.ref("password")],
          "Both password need to be the same"
        )
      })
})


export default changePasswordSchema;