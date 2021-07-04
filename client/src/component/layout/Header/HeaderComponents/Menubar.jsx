import { useContext } from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";
import { NavContext } from "../../../../context/NavState";

const Menubar = () => {
    const { isOpen, handleClick } = useContext(NavContext);

    return (
        //! Render Hamburger Icon
        <div className={barsStyles} onClick={handleClick} role="presentation">
            <IconContext.Provider value={{ size: "1.7rem" }}>
                {isOpen ? <GiSplitCross /> : <FiMenu />}
            </IconContext.Provider>
        </div>
    );
};

//! Styles
const { barsStyles } = {
    barsStyles: "pr-5 cursor-pointer md:hidden",
};

export default Menubar;
