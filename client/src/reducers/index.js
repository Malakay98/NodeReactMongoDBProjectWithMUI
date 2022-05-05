import { combineReducers } from "redux";

import posts from './posts.js'

// I can use posts:posts, but as the key is the same as the value; i keep the first one
export default combineReducers({ posts });