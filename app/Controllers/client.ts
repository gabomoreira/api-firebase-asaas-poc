import type { HttpContext } from '@adonisjs/core/http'
import { IPaginationAsaas } from '../types/Pagination.js'
import { IClient } from '../types/Client.js'
import { asaasGateway } from '../shared/service/asaas.js'
import { createClientValidator } from '../Validators/clients.js'

export default class ClientController {
  async listPaginate({ request }: HttpContext) {
    const { offset = 0, limit = 10 } = request.qs()

    const urlRelative = `/customers?offset=${offset}&limit=${limit}`
    try {
      const { data } = await asaasGateway.get<IPaginationAsaas<IClient>>(urlRelative)
      if (data)
        return {
          data: data.data,
          totalCount: data.totalCount,
        }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  async create({ request }: HttpContext) {
    const dataValiding = await request.validateUsing(createClientValidator)

    const urlRelative = `/customers`
    try {
      const { data } = await asaasGateway.get<IClient>(urlRelative, { data: dataValiding })
      if (data) return data
    } catch (error) {
      console.log(error, 'error')
    }
  }
}
