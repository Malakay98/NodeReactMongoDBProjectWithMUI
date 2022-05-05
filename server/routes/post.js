import express from "express";

// Import the functions from the controllers
import { getPosts, createPost, getPost, updatePost, deletePost, likePost } from "../controllers/post.js";

// Create a handle router manager
const router = express.Router();

// http://localhost:420/posts
router.get('/', getPosts);
router.post('/', createPost)
router.get('/:id', getPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)


export default router;