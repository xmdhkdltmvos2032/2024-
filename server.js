const express = require("express");
const app = express();
const router = require("./route/contactrouter");
const db = require("./db/mongodb.js");


db();
app.use((express.json()));
app.use(express.urlencoded({ extended: true }));
app.use("/contacts",router);

app.get("/", (req, res) => {
    res.send("<h1>황예지사랑해🖤</h1>");
})

app.listen(3000, () => console.log("서버 실행중"));