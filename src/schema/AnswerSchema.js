import * as yup from 'yup'

let answerSchema = yup.object().shape({
    answer: yup.string().required()
})


export default answerSchema;