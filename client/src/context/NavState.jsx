import { createContext, useEffect, useState } from "react";

export const NavContext = createContext();

const NavState = ({ children }) => {
    //! Hamburger menu open/close state
    const [isOpen, setisOpen] = useState(false);
    const [height, setHeight] = useState("h-20");
    const [HMheight, setHMHeight] = useState("top-20");

    //! Styles
    const { navStyles } = {
        navStyles: `${height} md:px-16 flex w-full justify-between items-center fixed shadow-xl z-40 bg-white transition-all duration-300`,
    };

    //! Nav List
    const navList = ["home", "services", "our works", "clients", "contact"];

    //! Handle click on hamburger icon
    const handleClick = () => setisOpen(!isOpen);

    //! Run on every render
    useEffect(() => {
        //! Close hamubrger menu while window resizing
        const hideMenu = () => {
            if (isOpen === true && window.innerWidth > 768) setisOpen(false);
        };

        //! Resize header on scroll
        const resizeHeaderOnScroll = () => {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop;
            const shrinkOn = 200;

            if (distanceY > shrinkOn) {
                setHeight("h-16");
                setHMHeight("top-16");
            } else {
                setHeight("h-20");
                setHMHeight("top-20");
            }
        };

        //! Add event listeners
        window.addEventListener("resize", hideMenu);
        window.addEventListener("scroll", resizeHeaderOnScroll);

        //! Remove event listeners before every render
        return () => {
            window.removeEventListener("resize", hideMenu);
            window.removeEventListener("scroll", resizeHeaderOnScroll);
        };
    });

    return (
        <NavContext.Provider
            value={{
                navStyles,
                isOpen,
                HMheight,
                handleClick,
                navList,
            }}
        >
            {children}
        </NavContext.Provider>
    );
};

export default NavState;
