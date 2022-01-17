const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");


// const userRegister = async (req, res, role = "admin") => {
//   try {
//     const { username, password } = req.body;

//     const finduser = await User.findOne({ username })
//     if (finduser) {
//       return res.status(400).json({ message: "user alredy taken" });
//     }
//     // Validate the username
//     // let usernameNotTaken = await validateUsername(req.body.username);
//     // if (!usernameNotTaken) {
//     //   return res.status(400).json({
//     //     message: `Username is already taken.`,
//     //     success: false
//     //   });
//     // }
//     const newUser = new User({
//       username,
//       password,
//       role
//     });
//     const salt = await bcrypt.genSalt(10);
//     newUser.password = await bcrypt.hash(newUser.password, salt);

//     await newUser.save();
//     return res.status(201).json({
//       message: "Now you are successfully registred. Please nor login.",
//       success: true
//     });
//   } catch (err) {
//     // console.log(err)
//     return res.status(500).json({
//       message: "Unable to create your account.",
//       success: false
//     });
//   }
// };


// const userLogin = async (req, res, role = "admin") => {
//   let { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user) {
//     return res.status(404).json({
//       message: "Username is not found. Invalid login credentials.",
//       success: false
//     });
//   }
//   if (user.role !== role) {
//     return res.status(403).json({
//       message: "Please make sure you are logging in from the right portal.",
//       success: false
//     });
//   }
//   let ismatch = await bcrypt.compare(password, user.password);
//   if (ismatch) {
//     let token = jwt.sign(
//       {
//         user_id: user._id,
//         role: user.role,
//         username: user.username,
//       },
//       process.env.SECRET,
//       { expiresIn: "7 days" }
//     );

//     let result = {
//       username: user.username,
//       role: user.role,
//       token: `Bearer ${token}`,
//       expiresIn: 168
//     };

//     return res.status(200).json({
//       result,
//       message: "You are now logged in.",
//       success: true
//     });
//   } else {
//     return res.status(403).json({
//       message: "Incorrect password.",
//       success: false
//     });
//   }
// };

// const userAuth = passport.authenticate("jwt", { session: false });

// const checkRole = roles => (req, res, next) =>
//   !roles.includes(req.user.role)
//     ? res.status(401).json("Unauthorized")
//     : next();
const checkRole = ((roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
   return next();
  }
  res.status(401).json("Unauthorized");
})

module.exports = {
  // userAuth,
  checkRole,
  // userLogin,
  // userRegister,
};  
