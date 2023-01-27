const router = require("express").Router();
const Category = require("../models/Category");


router.post('/', async (req, res) => {
    const Newcat = await new Category(req.body);
    try {
        const Savedcat = await Newcat.save();
        res.status(200).json(Savedcat)
        
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get("/", async (req, res) => {
  
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(400).json(error);
  }
});

















module.exports = router;