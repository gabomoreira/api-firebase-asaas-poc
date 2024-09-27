import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import errors from '../shared/errorsMessages/index.js'

const createUniqueBoletoOrPixObject = vine.object({
  billingType: vine.enum(['BOLETO', 'CREDIT_CARD']),
  value: vine.number(),
  customer: vine.string(),
  dueDate: vine.date(),
})

const createCreditCardObject = vine.object({
  billingType: vine.enum(['BOLETO', 'CREDIT_CARD']),
  value: vine.number(),
  customer: vine.string(),
  dueDate: vine.date(),
})

const messages = {
  required: errors.required.pt,
  string: errors.string.pt,
}
vine.messagesProvider = new SimpleMessagesProvider(messages)

const createUniqueBoletoOrPixValidator = vine.compile(createUniqueBoletoOrPixObject)
export { createUniqueBoletoOrPixValidator }
