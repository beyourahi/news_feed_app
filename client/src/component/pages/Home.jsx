import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthState";
import Header from "../layout/Header/Header";
import PostForm from "../posts/PostForm";
import Posts from "../posts/Posts";

const Home = () => {
    const { loadUser } = useContext(AuthContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => loadUser(), []);

    return (
        <>
            <Header />

            <div className="pt-28">
                <PostForm />
                <div className="flex flex-col items-center">
                    <Posts />
                </div>
            </div>
        </>
    );
};

export default Home;
