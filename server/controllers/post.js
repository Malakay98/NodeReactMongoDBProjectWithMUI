// Here's the place for all the logical and functions for the routes
import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"

const router = express.Router()

// Put async before the function to declare an asynchronous function
export const getPosts = async (req, res) => {
    try {
        // Find something inside of a model takes time, this means is an Asynchronous function
        // We need to put await before the function
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        // *200* means; everything is okay
        res.status(200).json(postMessages)
    } catch (error) {
        // *404* means; that a requested page is not available.
        res.status(404).json({ message: error.message })
    }
}

export const getPost = async (req, res) => {
    const {id} = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)

    try {
        // Again, this is an asynchronous action
        await newPost.save()

        // *201* means; request was successful and as a result, a resource has been created
        res.status(201).json(newPost);
    } catch (error) {
        // *409* means; the request could not be processed because of conflict in the request
        res.status(409).json({ message: error.message })
    }
}


export const updatePost = async (req, res) => {
    const {id} = req.params;
    const {title, message, creator, selectedFile, tags} = req.body;

    // If the condition is not met, then send this error message
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {creator, title, message, tags, selectedFile, _id: id};

    await PostMessage.findByIdAndUpdate(id, updatedPost, {new : true});
    
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    // If everything is ok, then add one new like to the post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;