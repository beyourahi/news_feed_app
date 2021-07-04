const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/jwt_auth.js");
const sql = require("../util/sql");

//? @route     GET /api/auth
//? @desc      Get logged in user
//? @access    Private

router.get(`/`, auth, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//? @route     POST /api/auth
//? @desc      Log in user
//? @access    Public
router.post(`/`, async (req, res) => {
  //! Destructuring incoming data
  const { email, password } = req.body;
  console.error(email, password)
  
  try {
    //! Check Email
    const [row] = await sql.execute("SELECT * FROM `users` WHERE `email`=?", [
      email,
    ]);

    if (row.length != 1) {
      return res.status(400).json({ msg: "Invalid Email" });
    }
   
    //! Check password
    const isMatch = await bcrypt.compare(password, row[0].password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    //! Create & send a JWT
    const payload = { user: { id: row[0].id ,username:row[0].username} };
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
