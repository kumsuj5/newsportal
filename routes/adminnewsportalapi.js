const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Adminnews = require('../model/adminnewsSchema');
const checkauth = require('../middleware/check-auth')
// get all data 

router.get('/',checkauth, (req, res, next) => {
    Adminnews.find().then((result) => {
        res.status(200).json({
            newsData: result
        })
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//get one data by user

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Adminnews.findById(req.params.id)
        .then((result) => {
            res.status(200).json({
                news: result
            })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

// post ,method

router.post('/', (req, res, next) => {
    const news = new Adminnews({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        details: req.body.details,
        location: req.body.location,
        name: req.body.name,
    })
    news.save().then(result => {
        console.log(result);
        res.status(200).json({
            newData: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

// delete ,method

router.delete('/:id', (req, res, next) => {
    Adminnews.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json({
                message: 'Adminnews details deleted',
                result: result
            })
        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})

//put method 

router.put('/:id',(req,res,next)=>{
    console.log(req.params.id)
    Adminnews.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            details:req.body.details,
            location:req.body.location,
            title:req.body.title
    }}).then((result)=>{
        res.status(200).json({
            message: 'Adminnews details updated',
            updated_news:result
        })
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router;