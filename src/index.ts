import app from './app'
import {config} from 'dotenv'
import shortRoutes from './routes/short.routes'

config()
import './db'

app.use('/',shortRoutes)


app.listen(process.env.PORT || 4000,()=>{
    console.log('The server is running')
})