const jwt = require('jsonwebtoken');
const passport = require('passport')
const userdata = require('../Models/Userdata')
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretKey
};

module.exports = passport => {
    passport.use(
        new Strategy(opts, async (payload, done) => {
            await userdata.findById(payload._id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => {
                    return done(null, false);
                });
        })
    );
};

const userAuth = passport.authenticate("jwt", { session: false });

// exports.verifyUser = function (req, res, next) {
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];
//     if (token) {
//         jwt.verify(token, process.env.secretKey, function (err, decoded) {
//             if (err) {
//                 var err = new Error('You are not authenticated!');
//                 err.status = 401;
//                 return next(err);
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         var err = new Error('No token provided!');
//         err.status = 403;
//         return next(err);
//     }
// };

// exports.verifyAdmin = function (req, res, next) {
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];
//     if (token) {
//         jwt.verify(token, process.env.secretKey, function (err, decoded) {
//             if (err) {
//                 var err = new Error('You are not authenticated to perform thiss action!');
//                 err.status = 401;
//                 return next(err);
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         var err = new Error('No token provided!');
//         err.status = 403;
//         return next(err);
//     }
// }
module.exports = { userAuth }

// exports.checkRole = roles => (req, res, next) =>
//     !roles.includes(req.user.role)
//         ? res.status(401).json("Unauthorized")
//         : next();