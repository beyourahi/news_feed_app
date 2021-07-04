const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;


//! Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));


//! Define Routes

//! post images
app.use("/api/post", require("./routes/post.js"));

//! login  
app.use("/api/auth", require("./routes/auth.js"));

//! register
app.use("/api/users", require("./routes/users.js")); 


//server  error handling
app.use(require("./middlewares/err_500"))
// invalid url
app.use(require("./middlewares/err_404"))


//! Serve static assets(React frontend) in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
    );
}

//! Start Server
app.listen(PORT, () => console.log(`We're chillin on ${PORT} 🤘`));
