import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default token => {
    token
        ? (axios.defaults.headers.common["x-auth-token"] = token)
        : delete axios.defaults.headers.common["x-auth-token"];
};
