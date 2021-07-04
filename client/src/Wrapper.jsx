import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./context/AuthState";
import NavState from "./context/NavState";
// import AlertState from "./context/AlertState";
// import ContactState from "./context/ContactState";

const Wrapper = ({ children }) => (
    <AuthState>
        <NavState>
            <Router>{children}</Router>
        </NavState>
    </AuthState>
);

export default Wrapper;
