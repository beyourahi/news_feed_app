module.exports = (req,res,next) => {
    next(req.url+" | page does not exist!");
    console.log()
}