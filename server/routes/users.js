const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();


const sql = require("../util/sql");
//? @route     POST /api/users
//? @desc      Register a User
//? @access    Public
router.post(`/`, async (req, res) => {
  //! Destructuring incoming data
  const  { username, email, password } = req.body;
  const unique_userName = `${username}#${Math.floor(1000 + Math.random() * 9000)}`;
  
  
  try {
    //! Check to see if user already exists
    const [row] = await sql.execute("SELECT * FROM `users` WHERE `email`=?", [
      email,
    ]);
     
    if (row.length >= 1) {
      console.log("user already esists")
      return res.status(400).json({ msg: "User already exists" });
      
    }

    //! Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //! Create new user with unique username like discord with 4 random digits
    
    
    const userArr = [unique_userName, email, hashedPassword];

    //! Save user to DB
    const [rows] = await sql.execute(
      "INSERT INTO `users`(`username`,`email`,`password`) VALUES(?,?,?)",
      userArr
    );
      
    if (rows.affectedRows !== 1) {
      return res.status(400).json({ msg: "Your registration has failed." });
    }

    //! Create & send a JWT
    const payload = { user: { id: rows.insertId , username:unique_userName } };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
