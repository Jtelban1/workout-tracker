const router = require("express").Router()
const path = require("path").resolve(__dirname, "..")

router.get("/", function(req,res){
    res.sendFile(Path + "/public/index.html")
}),
router.get("/exercise", function(req,res){
    res.sendFile(Path + "/public/exercise.html")
}),


module.exports = router;