import axios from "axios";
import { createContext, useReducer, useState } from "react";
import { GET_POSTS, ADD_POST, POST_ERROR } from "./types.js";

export const PostContext = createContext();

//! Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        //? Get Contacts
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };

        //? Add Post
        case ADD_POST:
            return {
                ...state,
                loading: false,
            };

        //? Post Error
        case POST_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        //? Default
        default:
            return state;
    }
};

const PostState = ({ children }) => {
    const initialState = {
        posts: null,
        caption: "",
        image: null,
        error: null,
        loading: true,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const [open, setOpen] = useState(false);

    //? Get Posts
    const getPosts = async () => {
        try {
            const res = await axios.get("/api/post");
            dispatch({ type: GET_POSTS, payload: res.data });
        } catch (err) {
            dispatch({ type: POST_ERROR, payload: err.response.data.msg });
        }
    };

    //? Add Post
    const addPost = async formData => {
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        try {
            await axios.post("/api/post", formData, config);
            dispatch({ type: ADD_POST });
        } catch (err) {
            dispatch({ type: POST_ERROR, payload: err.response.data.msg });
        }
    };

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                caption: state.caption,
                image: state.image,
                error: state.error,
                loading: state.loading,
                open,
                setOpen,
                addPost,
                getPosts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export default PostState;
