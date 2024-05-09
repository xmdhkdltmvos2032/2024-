const mongoose = require("mongoose");

const dbURI = '';

const dbConnect = async()=>{

    try {

        let mongdbCon = await mongoose.connect(dbURI)
        console.log("dbconnect");

    } catch (error) {
        console.log(error);
    }

}

module.exports = dbConnect;