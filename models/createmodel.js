const mongoose = require("mongoose");

const contactSchma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        required:[true,"전화번호는꼭기입해주세요"]
    },
    timestamps:true
})

const Contact = mongoose.model("Contact",contactSchma);

module.exports = Contact;