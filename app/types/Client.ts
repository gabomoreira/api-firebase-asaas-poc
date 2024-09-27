export interface IClientCreate {
  name: string
  cpfCnpj: string
  email?: string
}

export interface IClient {
  object: string
  id: string
  dateCreated: string
  name: string
  email: null
  company: null
  phone: null
  mobilePhone: null
  address: null
  addressNumber: null
  complement: null
  province: null
  postalCode: null
  cpfCnpj: string
  personType: string
  deleted: boolean
  additionalEmails: null
  externalReference: null
  notificationDisabled: boolean
  observations: null
  municipalInscription: null
  stateInscription: null
  canDelete: boolean
  cannotBeDeletedReason: null
  canEdit: boolean
  cannotEditReason: null
  city: null
  cityName: null
  state: null
  country: string
}
