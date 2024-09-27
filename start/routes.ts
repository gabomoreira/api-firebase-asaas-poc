/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PaymentController = () => import('../app/Controllers/payment.js')
const ClientController = () => import('../app/Controllers/client.js')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('customers', [ClientController, 'listPaginate'])
router.post('customers', [ClientController, 'create'])

router.get('payments', [PaymentController, 'listPaginate'])
router.post('payments/boleto', [PaymentController, 'createUniqueBoletoOrPix'])
router.post('payments/creditCard', [PaymentController, 'createCreditCard'])
