const express = require("express");
const router = express.Router();
const auth = require("../middlewares/jwt_auth.js");
const Contact = require("../models/Contact.js");

//? @route     GET /api/contacts
//? @desc      Get all user contacts
//? @access    Private
router.get(`/`, auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//? @route     POST /api/contacts
//? @desc      Create a contact
//? @access    Private
router.post(
    `/`,
    auth,
    async (req, res) => {
        //! Destructuring incoming data
        const { name, email, phone, type } = req.body;

        try {
            //! Check to see if contact already exists
            let contact = await Contact.findOne({ email });
            if (contact) {
                return res.status(400).json({ msg: "Contact already exists" });
            }

            //! Create new contact
            contact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id,
            });

            //! Save contact to DB
            const newContact = await contact.save();

            //! Return contact as json
            res.json(newContact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

//? @route     PUT /api/contacts
//? @desc      Update a contact
//? @access    Private
router.put(`/:id`, auth, async (req, res) => {
    //! Destructuring incoming data
    const { name, email, phone, type } = req.body;

    //! new object for updated contact
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

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

        //! Update contact
        contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { $set: contactFields },
            { new: true }
        );

        //! Return contact as json
        res.json(contact);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//? @route     DELETE /api/contacts
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
