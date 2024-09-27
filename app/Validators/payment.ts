import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import errors from '../shared/errorsMessages/index.js'

const createUniqueBoletoOrPixObject = vine.object({
  billingType: vine.enum(['BOLETO']),
  value: vine.number(),
  customer: vine.string(),
  dueDate: vine.date(),
})

const createCreditCardObject = vine.object({
  customer: vine.string(),
  billingType: vine.enum(['CREDIT_CARD']),
  value: vine.number(),
  dueDate: vine.date(),
  creditCard: vine.object({
    holderName: vine.string(),
    number: vine.string(),
    expiryMonth: vine.string(),
    expiryYear: vine.string(),
    ccv: vine.string(),
  }),
  creditCardHolderInfo: vine.object({
    name: vine.string(),
    email: vine.string(),
    cpfCnpj: vine.string(),
    postalCode: vine.string(),
    addressNumber: vine.string(),
    phone: vine.string(),
  }),
})

const messages = {
  required: errors.required.pt,
  string: errors.string.pt,
}
vine.messagesProvider = new SimpleMessagesProvider(messages)

const createUniqueBoletoOrPixValidator = vine.compile(createUniqueBoletoOrPixObject)
const createCreditCardValidator = vine.compile(createCreditCardObject)
export { createUniqueBoletoOrPixValidator, createCreditCardValidator }
