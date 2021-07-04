import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./context/AuthState";
import NavState from "./context/NavState";
import PostState from "./context/PostState";
// import AlertState from "./context/AlertState";
// import ContactState from "./context/ContactState";

const Wrapper = ({ children }) => (
    <AuthState>
        <PostState>
            <NavState>
                <Router>{children}</Router>
            </NavState>
        </PostState>
    </AuthState>
);

export default Wrapper;
