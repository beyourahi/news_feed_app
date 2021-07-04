import { Link } from "react-router-dom";

const Brand = () => (
    //! Render Brand Name
    <Link to="/" className={brandNameStyles}>
        <h1>Edie</h1>
    </Link>
);

//! Styles
const { brandNameStyles } = {
    brandNameStyles: "pl-5 md:pl-0 text-2xl font-heeb font-extrabold md:text-4xl",
};

export default Brand;
