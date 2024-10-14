import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-green-200 shadow-lg px-4 py-4 w-full max-w-screen-s rounded-xl mx-auto sm:bg-orange-200 lg:bg-orange-400">
      <div className="logo-container">
        <img
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
