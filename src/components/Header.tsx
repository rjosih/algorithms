import { Link } from "react-router-dom";

const Header = () => {
    const liClasses: string = "hover:underline cursor-pointer m-4";

    return (
        <nav>
            <ul className="container mx-auto block md:flex justify-between border-2">
                <li className={liClasses}>
                    <Link to="/">Home</Link>
                </li>
                <li className={liClasses}>
                    <Link to="/creditcard">CreditCard</Link>
                </li>
                <li className={liClasses}>
                    <Link to="/string">CharacterString</Link>
                </li>
                <li className={liClasses}>
                    <Link to="/numbers">NumberArray</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;