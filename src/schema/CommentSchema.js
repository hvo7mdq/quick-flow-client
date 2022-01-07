import * as yup from 'yup'

let commentSchema = yup.object().shape({
    comment: yup.string().required("Comment is required"),
})


export default commentSchema;