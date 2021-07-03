const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

//! Connect to Database
require("./db.js");

//! Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//! Define Routes
app.use(`/api/contacts`, require(`./routes/contacts.js`));
app.use(`/api/auth`, require(`./routes/auth.js`));
app.use(`/api/users`, require(`./routes/users.js`));

//! Serve static assets(React frontend) in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
    );
}

//! Start Server
app.listen(PORT, () => console.log(`We're chillin on ${PORT} 🤘`));
