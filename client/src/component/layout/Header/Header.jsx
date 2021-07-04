import { useContext } from "react";
import { NavContext } from "../../../context/NavState";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => {
    const { navStyles } = useContext(NavContext);

    //? Render Header UI
    return (
        <nav className={navStyles}>
            {/*//// Brand Name/logo */}
            <Brand />

            {/*//// Hamburger Menu */}
            <Menubar />

            {/*//// Nav Items */}
            <NavItems />
        </nav>
    );
};

export default Header;
