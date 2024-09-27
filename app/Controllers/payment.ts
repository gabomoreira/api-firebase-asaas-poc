import type { HttpContext } from '@adonisjs/core/http'
import { asaasGateway } from '../shared/service/asaas.js'
import { IPaginationAsaas } from '../types/Pagination.js'
import { IPayment } from '../types/Payment.js'
import { createUniqueBoletoOrPixValidator } from '../Validators/payment.js'

export default class PaymentController {
  async listPaginate({ request }: HttpContext) {
    const { customerId, offset = 0, limit = 10 } = request.qs()

    const urlRelative = `/payments?customer=${customerId}&offset=${offset}&limit=${limit}`
    try {
      const { data } = await asaasGateway.get<IPaginationAsaas<IPayment>>(urlRelative)
      if (data)
        return {
          data: data.data,
          totalCount: data.totalCount,
        }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  async createUniqueBoletoOrPix({ request }: HttpContext) {
    const dataValiding = await request.validateUsing(createUniqueBoletoOrPixValidator)

    const urlRelative = `/payments`
    try {
      const { data } = await asaasGateway.get<IPayment>(urlRelative, { data: dataValiding })
      if (data) return data
    } catch (error) {
      console.log(error, 'error')
    }
  }

  async createCreditCard({ request }: HttpContext) {
    // const dataValiding = await request.validateUsing(createPaymentValidator)

    const urlRelative = `/payments`
    try {
      // const { data } = await asaasGateway.get<IPayment>(urlRelative, { data: dataValiding })
      // if (data) return data
    } catch (error) {
      console.log(error, 'error')
    }
  }
}
