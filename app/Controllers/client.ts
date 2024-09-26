import type { HttpContext } from '@adonisjs/core/http'
import { IPaginationAsaas } from '../types/Pagination.js'
import { IClient } from '../types/Client.js'
import { asaasGateway } from '../shared/service/asaas.js'

export default class ClientController {
  async listPaginate({ request }: HttpContext) {
    const { offset = 0, limit = 10 } = request.qs()

    const urlRelative = `/customers?offset=${offset}&limit=${limit}`
    const { data } = await asaasGateway.get<IPaginationAsaas<IClient>>(urlRelative)
    if (data)
      return {
        data: data.data,
        totalCount: data.totalCount,
      }
  }
}
