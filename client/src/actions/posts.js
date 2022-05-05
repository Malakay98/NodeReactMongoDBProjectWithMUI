// Import the constants
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from "../constants/actionTypes.js";

// Import everything from the actions as 'api'
import * as api from "../api";

// Create actions (are functions that return an action)
// Using redux-thunk allows to put an additional arrow function, to use Asynchronous functions
export const getPosts = () => async (dispatch) => {
  try {
    // First get the response from the api, and then in the response always have the data object ({ data }) we're returning from the backend, and then get the data
    // data represents the posts
    const { data } = await api.fetchPosts();

    // Instead of returning, i dispatch the action
    // An action is an object that has the type and a payload
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
      console.log(error.message)
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post)

    dispatch({ type: CREATE, payload: data})
  } catch (error) {
    console.log(error.message)
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post)

    dispatch({ type: UPDATE, payload: data})
  } catch (error) {
    console.log(error.message)
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);

    dispatch({type: LIKE, payload: data})
  } catch (error) {
    console.log(error.message)
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.deletePost(id);

    dispatch({type: DELETE, payload: data})
  } catch (error) {
    console.log(error.message)
  }
};
