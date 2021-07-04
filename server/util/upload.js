const { nanoid } = require("nanoid");
const multer = require("multer");
const auth = require("../middlewares/jwt_auth.js");
const sql = require("./sql");

let upload = multer({
    dest:"./upload"
})


module.exports = upload.single("post")