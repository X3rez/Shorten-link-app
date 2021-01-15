import {Router} from'express'

//controllers
import {shortHomeController,saveUrlController,openUrlController} from './controllers/short.controller'

const route:Router = Router()


route.get('/',shortHomeController)

route.post('/',saveUrlController)

route.get('/:shortlink',openUrlController)

export default route