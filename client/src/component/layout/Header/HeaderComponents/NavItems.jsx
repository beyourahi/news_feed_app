import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthState";
import { NavContext } from "../../../../context/NavState";

const NavItems = () => {
    const { isOpen, HMheight, navList } = useContext(NavContext);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        //! Render Nav Lists
        <div
            className={
                isOpen
                    ? `${HMheight} flex flex-col justify-center items-center space-y-7 text-center bg-white text-black w-full h-screen absolute pb-24 md:block z-50 font-bold text-3xl`
                    : "hidden md:flex justify-between w-64"
            }
        >
            {isAuthenticated ? (
                <>
                    <li>Hey, username</li>
                    <li>
                        <a href="#!">
                            <i className="fas fa-sign-out-alt"></i>
                            <span className="hide-sm">Logout</span>
                        </a>
                    </li>
                </>
            ) : (
                <>
                    <Link
                        to="/login"
                        type="submit"
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        type="submit"
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                    >
                        Create Account
                    </Link>
                </>
            )}
        </div>
    );
};

//! Styles
const { itemStyles } = {
    itemStyles: "font-pops font-medium text-gray-700 hover:text-black md:pr-7 last:pr-0",
};

export default NavItems;
