import mongoose from "mongoose";

// Create the schema for the posts
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    // Array of strings
    tags: [String],
    selectedFile: String,
    // We have to add additional information, thats way we put this inside an object
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Now we have the schema, we need turn it into a model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;