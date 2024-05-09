const express = require("express");
const router = express.Router();
const db = require("../db/mongodb.js");
const contactHttp = require("../controller/contactCon.js");

router
    .route("/")
    .get(contactHttp.contactGet)
    .post(contactHttp.contactPost);

router
    .route("/hello")
    .get((req, res) => {

    })



module.exports = router;