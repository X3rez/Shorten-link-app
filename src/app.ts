import express,{Application} from 'express'
import {join} from 'path'
const app:Application = express()


app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


export default app