import mongoose,{ConnectOptions} from 'mongoose'

const Options:ConnectOptions={
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}

mongoose.connect(process.env.MONGO_URI!,Options)
.then(()=>console.log('DB is connected'))
.catch(err=>console.log(err))
