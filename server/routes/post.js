const express = require("express");
const router = express.Router();
const auth = require("../middlewares/jwt_auth");
const sql = require("../util/sql");
const upload = require("../middlewares/upload");
const path = require("path");
//? @route     GET /api/contacts
//? @desc      Get all user contacts
//? @access    Private
router.get(`/`, auth, async (req, res) => {
  try {
    const query =
      "SELECT posts.post_id,users.username,caption FROM users INNER JOIN posts ON users.id = posts.user_id";
    const [rows] = await sql.execute(query);
    console.log(rows);

    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//? @route     POST /api/contacts
//? @desc      Create a contact
//? @access    Private
router.post(`/`, auth, upload, async (req, res) => {
  //! Destructuring incoming data
  const { caption } = req.body;
  const { user, imgName } = req;
  console.log(user, imgName,caption);
  try {
    //! Create new post
    const postArr = [user.id, caption, imgName];
    //! Save post to DB
    const [rows] = await sql.execute(
      "INSERT INTO `posts`(`user_id`,`caption`,`post_id`) VALUES(?,?,?)",
      postArr
    );

    if (rows.affectedRows !== 1) {
      return res.status(400).json({ msg: "Your post submission has failed." });
    }

    //! return success message
    res.json({ msg: "Your post was submitted." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//? @route     PUT /api/post
//? @desc      Update a post like
//? @access    Private
router.put(`/:postId`, auth, async (req, res) => {
  const user = req.user;

  //! new object for updated contact

  try {
    //! Check to see if user has alreqady liked the post

    // //! Update post

    //! Return contact as json
    res.json("post");
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//? @route     DELETE /api/post
//? @desc      Delete a contact
//? @access    Private
router.delete(`/:post_id`, auth, async (req, res) => {
  try {
    //! Check to see if post already exists

    const [row] = await sql.execute("SELECT * FROM `posts` WHERE `post_id`=?", [
      req.params.post_id,
    ]);

    if (row.length >= 1) {
      //! Delete contact
      const [row] = await sql.execute("DELETE FROM `posts` WHERE `post_id`=?", [
        req.params.post_id,
      ]);
      console.log("post found and deleted");
      return res.json({ msg: "post deleted" });
    } else {
      return res.status(400).json({ msg: "post now found" });
    }
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
