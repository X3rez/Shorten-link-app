const {Schema, model} = require('mongoose')

const userUrl = new Schema({
    fullUrl: {type: String, required: true,},
    shortenUrl:{type:String,required:true}
})


module.exports = model('usersUrl', userUrl)