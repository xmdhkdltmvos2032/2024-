const mongoose = require("mongoose");
const moment = require('moment-timezone');

let postData = moment.tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");

const testSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const test = mongoose.model("test",testSchema);
module.exports = test;