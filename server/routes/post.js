const express = require("express");
const router = express.Router();
const auth = require("../middlewares/jwt_auth");
const sql = require("../util/sql");
const upload = require("../middlewares/upload")


//? @route     GET /api/contacts
//? @desc      Get all user contacts
//? @access    Private
router.get(`/`, auth, async (req, res) => {
  try {
    //const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json("const");
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
 const user = req.user;
    
  try {
    //! Create new post

    //! Save contact to DB
    //  const newContact = await contact.save();

    //! Return contact as json
    res.json("testing");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//? @route     PUT /api/post
//? @desc      Update a psot like
//? @access    Private
router.put(`/:postId`, auth, async (req, res) => {
  const user = req.user
  
  //! new object for updated contact
  
  try {
    //! Check to see if user has alreqady liked the post

    // let contact = await Contact.findById(req.params.id);
    // if (!contact) {
    //   return res.status(404).json({ msg: "Contact not found" });
    // }

    // //! Update post
    // contact = await Contact.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: contactFields },
    //   { new: true }
    // );

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
router.delete(`/:id`, auth, async (req, res) => {
  try {
    //! Check to see if contact exists
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    //! Check if contact is owned by the user
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    //! Delete contact
    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact Deleted" });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
