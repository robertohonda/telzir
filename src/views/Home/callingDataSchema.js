import * as yup from 'yup'

const callingDataSchema = yup.object().shape({
  origin: yup.string().required(),
  destination: yup.string().required(),
  time: yup
    .number()
    .positive()
    .integer()
    .required(),
  ratePlan: yup.string().required(),
})

export default callingDataSchema
