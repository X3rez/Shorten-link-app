const {Router} = require('express')
const route = Router()
const urlModel = require('../models/short')
const {nanoid} = require('nanoid')
const validUrl = require('valid-url')

route.get('/',(req,res)=>{
    res.render('home',{Shorten:""})
})

route.post('/', async(req,res)=>{
    const {fullUrl} = req.body;
    if(!validUrl.isUri(fullUrl)) return res.status(400).json({err:"the URL is invalid"})

    const userUrl = new urlModel({
        fullUrl,
        shortenUrl: nanoid()
    })
    
     const userData = await userUrl.save()

     res.render('home',{Shorten: userData.shortenUrl || ''})
})

route.get('/:shortlink',async (req,res)=>{
    const param = req.params.shortlink
    const searchUser = await urlModel.findOne({shortenUrl:param})
    if(!searchUser) return res.status(404).json({err:'invalid url'})

    res.redirect(searchUser.fullUrl)

})


module.exports = route