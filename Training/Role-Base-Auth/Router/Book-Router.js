const router = require("express").Router();
const bookschema = require('../Models/BookSchema');
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const userAuth = passport.authenticate("jwt", { session: false });
const checkRole = ((roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    return next();
  }
  res.status(401).json("Unauthorized");
})


router.get('/book', userAuth, checkRole(["admin", "user"]), async (req, res) => {
  try {
    const findbook = await bookschema.find();
    res.status(200).send(findbook);
  } catch (err) { res.status(500).send(err) }
})

router.post('/book', userAuth, checkRole(["admin"]), async (req, res) => {
  try {
    const createbook = new bookschema(req.body);
    await createbook.save();
    res.status(200).json({ message: "Book Add Successful", createbook });
  } catch (err) { res.status(500).send(err) }
})


router.put('/book/:id', userAuth, checkRole(["admin"]), async (req, res) => {
  try {
    const findbook = await bookschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!findbook) return res.status(404).send("BookId Invalid!!!")
    await findbook.save();
    res.status(200).send(findbook);
  } catch (err) { console.log(err) }
})



router.delete('/book/:id', userAuth, checkRole(["admin"]), async (req, res) => {
  try {
    const book = await bookschema.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book Not Found!!!!")
    res.send("Book Deleted......")
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
