import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthState";
import PostForm from "../posts/PostForm";

const Home = () => {
    // const { loadUser } = useContext(AuthContext);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(() => loadUser(), []);

    return (
        <div>
            <PostForm />
        </div>
    );
};

export default Home;
