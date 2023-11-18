import NavElmnt from "../contents/NavElmnt";
import Button from "../contents/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container  px-2 md:px-7  mx-auto h-20  flex justify-between items-center">
      <h1 className="flex items-start space-x-1">
        <span className="text-black text-xl font-bold font-Poppins">Mashi</span>
        <span className="text-orange-600 text-xl font-bold font-Poppins">Zone</span>
      </h1>

      <nav className="lg:flex hidden items-center space-x-30">
        <ul className="lg:flex hidden items-center space-x-30">
          <NavElmnt onClick={closeMenu}>
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "notActive")} end>
              Home
            </NavLink>
          </NavElmnt>
          <NavElmnt onClick={closeMenu}>
            <NavLink to="/team" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              Team
            </NavLink>
          </NavElmnt>
          <NavElmnt onClick={closeMenu}>
            <NavLink to="/service" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              Service
            </NavLink>
          </NavElmnt>
          <NavElmnt onClick={closeMenu}>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              Projects
            </NavLink>
          </NavElmnt>
          <NavElmnt onClick={closeMenu}>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              Testimonials
            </NavLink>
          </NavElmnt>
        </ul>

        <Button text="Login" hoverBG="green" />
        <Button text="Register" color="green" />
      </nav>

      {/* Mobile Menu (Hamburger Icon) */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-black text-xl focus:outline-none transition-transform transform">
          {isMenuOpen ? (
            <span>&times;</span> // "X" icon
          ) : (
            <span>&#9776;</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed top-16 left-0 h-full w-full bg-fgreen bg-gradient-to-b from-emerald-100 to-emerald-100 ">
          <ul className=" text-center p-4 flex flex-col items-center space-y-4">
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")} end>
                Home
              </NavLink>
            </NavElmnt>
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Team
              </NavLink>
            </NavElmnt>
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Service
              </NavLink>
            </NavElmnt>
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Projects
              </NavLink>
            </NavElmnt>
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                Testimonials
              </NavLink>
            </NavElmnt>

            <Button text="Login" hoverBG="green" />
            <Button text="Register" color="green" />
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
