import axios from 'axios'

let asaasGateway = axios.create({
  baseURL: process.env.ASAAS_URL,
  headers: {
    access_token: '$' + process.env.ASAAS_TOKEN + '==',
  },
})
export { asaasGateway }
