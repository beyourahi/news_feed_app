import { createContext, useReducer } from "react";
import axios from "axios";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from "./types.js";
import setAuthToken from "../utils/setAuthToken.js";

export const AuthContext = createContext();

//! Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        //? Register Success
        //? Login Success
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };

        //? Register Fail
        //? Auth Error
        //? Login Fail
        //? Logout
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
                user: null,
            };

        //? Load User
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };

        //? Clear Errors
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        //? Default
        default:
            return state;
    }
};

//! State Function
const AuthState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: true,
        error: null,
        user: null,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    //? Load User
    const loadUser = async () => {
        if (localStorage.token) setAuthToken(localStorage.token);

        try {
            const res = await axios.get("/api/auth");
            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };

    //? Register User
    const register = async formData => {
        const config = { headers: { "Content-Type": "application/json" } };

        try {
            const res = await axios.post("/api/users", formData, config);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
            loadUser();
        } catch (err) {
            dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
        }
    };

    //? Login User
    const login = async formData => {
        const config = { headers: { "Content-Type": "application/json" } };

        try {
            const res = await axios.post("/api/auth", formData, config);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            loadUser();
        } catch (err) {
            dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
        }
    };

    //? Log out
    const logout = () => dispatch({ type: LOGOUT });

    //? Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,
                register,
                clearErrors,
                loadUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
