const router = require("express").Router();
const Phone = require("./../models/Phone.model")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", async(req, res, next) => {
  try {
    const allPhones = await Phone.find()
    res.json(allPhones);
  } catch (error) {
    next(error)
  }  
});


router.get("/phones/:id", async(req, res, next) => {
  try {
    const onePhone = await Phone.findById(req.params._id)
    res.json(onePhone);
  } catch (error) {
    next(error)
  }  
});


module.exports = router;
