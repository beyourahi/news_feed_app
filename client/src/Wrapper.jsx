import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./context/AuthState";
// import AlertState from "./context/AlertState";
// import ContactState from "./context/ContactState";

const Wrapper = ({ children }) => (
    <AuthState>
        <Router>{children}</Router>
    </AuthState>
);

export default Wrapper;
