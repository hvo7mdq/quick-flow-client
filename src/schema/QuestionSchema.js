import * as yup from 'yup'

let questionSchema = yup.object().shape({
    title: yup.string().required("Title is required").min(10,"Title too short"),
    tags: yup.array().max(5,"Only 5 tags"),
    description: yup.string().required()
})


export default questionSchema;