
import { RequestHandler } from "express";
import urlModel  from '../../models/short'
import shortid from 'shortid'
import validUrl from 'valid-url'


export const shortHomeController:RequestHandler = (req,res)=>{
    res.render('home',{Shorten:""})
}


export const saveUrlController:RequestHandler =  async(req,res)=>{
    const {fullUrl} = req.body;
    const domain:string = process.env.DOMAIN! //this is our domain

    if(!validUrl.isUri(fullUrl)) return res.status(406).json({err:"the URL is invalid"})

    const userUrl = new urlModel({
        fullUrl,
        shortenUrl: shortid.generate()
    })
    
    const userData = await userUrl.save()
     
    res.render('home',{Shorten: domain + userData.shortenUrl || ''})
}


export const openUrlController:RequestHandler = async (req,res)=>{
    const param = req.params.shortlink

    const searchUser = await urlModel.findOne({shortenUrl:param})

    if(!searchUser) return res.json({err:'This URL does not exist'})

    res.redirect(searchUser.fullUrl) //redirect to URL saved
}