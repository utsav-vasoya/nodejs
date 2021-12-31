const mongoose = require('mongoose');
// const userschema = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     blogs: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Blog"
//     }]
// })

// const blogschema = new mongoose.Schema({
//     title: String,
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
//     comments: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment"
//     }]
// })

// const commentschema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
//     blog: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Blog"
//     },
//     body: String
// })

// const User = mongoose.model("User", userschema);
// const Blog = mongoose.model("Blog", blogschema);
// const Comment = mongoose.model("Comment", commentschema);

// module.exports = {User, Blog, Comment}

const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})


module.exports =
//  mongoose.model('User', userSchema),
 mongoose.model('Post', postSchema);
