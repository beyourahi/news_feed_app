module.exports = (err, req, res, next) => {
    if (res.headerSent) {
        next("there was a problem")
    } else {
        if (err.message) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send("internal server error")
        }
    }
    
    
}