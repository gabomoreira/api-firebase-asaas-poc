import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import errors from '../shared/errorsMessages/index.js'

const clientObject = vine.object({
  name: vine.string(),
  cpfCnpj: vine.string(),
  email: vine.string().optional(),
})

const messages = {
  required: errors.required.pt,
  string: errors.string.pt,
  email: errors.email.pt,
}
vine.messagesProvider = new SimpleMessagesProvider(messages)

const createClientValidator = vine.compile(clientObject)
export { createClientValidator }
