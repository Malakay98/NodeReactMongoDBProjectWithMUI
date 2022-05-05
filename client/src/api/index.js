import axios from 'axios';

// This is the URL pointing to my back-end URL
const URL = 'http://localhost:420/posts';

// Create the REQUEST FUNCTIONS 
export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost)
                                            // http://localhost:420/posts/<id>/likePost
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);