/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ClientController = () => import('../app/Controllers/client.js')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('customers', [ClientController, 'listPaginate'])
