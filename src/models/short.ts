import {Schema, model, Document} from 'mongoose'

interface IuserUrl extends Document {
    fullUrl:string
    shortenUrl:string
}

const userUrl:Schema = new Schema({
    fullUrl: {type: String, required: true,},
    shortenUrl:{type:String,required:true,unique:true}
})

export default model<IuserUrl>('usersUrl', userUrl)