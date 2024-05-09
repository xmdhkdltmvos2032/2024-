const asyncHandler = require('express-async-handler')

const contactHttp = {
    contactGet : asyncHandler(async(req,res)=>{
        res.send("hi get");
    }),
    contactPost:asyncHandler(async(req,res)=>{
        res.send("hi post");
    })
}


module.exports = contactHttp;