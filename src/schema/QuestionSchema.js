import * as yup from 'yup'

let questionSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    tags: yup.array().max(5,"Only 5 tags"),
    description: yup.string().required()
})


export default questionSchema;