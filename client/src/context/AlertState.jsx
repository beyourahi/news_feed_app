import { createContext, useReducer } from "react";
import { nanoid } from "nanoid";
import { SET_ALERT, REMOVE_ALERT } from "./types.js";

export const AlertContext = createContext();

//! Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        //? Set Alert
        case SET_ALERT:
            return [...state, action.payload];

        //? Remove Alert
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);

        //? Default
        default:
            return state;
    }
};

//! State Function
const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    //? Set & Remove Alert
    const setAlert = (msg, type, timeout = 3000) => {
        const id = nanoid();
        dispatch({ type: SET_ALERT, payload: { id, msg, type } });
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    };

    return (
        <AlertContext.Provider value={{ alerts: state, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertState;
