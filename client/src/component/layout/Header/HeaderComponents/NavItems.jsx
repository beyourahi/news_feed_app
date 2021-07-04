import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../../../context/AuthState";
import { NavContext } from "../../../../context/NavState";

const NavItems = () => {
    const { isOpen, HMheight } = useContext(NavContext);
    const { isAuthenticated, user } = useContext(AuthContext);

    return (
        //! Render Nav Lists
        <div
            className={
                isOpen
                    ? `${HMheight} flex flex-col justify-center items-center space-y-7 text-center bg-white text-black w-full h-screen absolute pb-24 md:block z-50 font-bold text-3xl`
                    : "hidden md:flex justify-between"
            }
        >
            {isAuthenticated ? (
                <div className="flex justify-between items-center w-96 bg-red-500">
                    {/*///// GREETINGS */}
                    <h4>Hey, {user && user.username}</h4>

                    <div className="flex justify-between w-7/12 bg-pink-500">
                        {/*///// CREATE POST */}
                        <Link
                            to="/register"
                            type="submit"
                            className="group relative flex justify-center py-2 px-7 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                        >
                            Post
                        </Link>

                        {/*///// LOG OUT */}
                        <Link
                            to="/login"
                            type="submit"
                            className="group relative flex justify-center items-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                        >
                            <FiLogOut />
                            <span className="hide-sm ml-1">Log Out</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between w-64">
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
                </div>
            )}
        </div>
    );
};

export default NavItems;
