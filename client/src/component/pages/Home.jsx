import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthState";

const Home = () => {
    const { loadUser } = useContext(AuthContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => loadUser(), []);

    return (
        <div>
            <h1>Home MF</h1>
        </div>
    );
};

export default Home;
