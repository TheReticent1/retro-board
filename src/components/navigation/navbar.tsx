import { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className={`navbar ${scrolled ? "opacity-9" : ""}`}>
          <div className="branding">
            <span style={{ color: "#ffffff" }}>👸🏻</span>Minerva
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to={"/"} className={isActive("/")} key="page1">
                  🚂 Hogwarts
                </Link>
              </li>
              <li>
                <Link to={"/hero"} className={isActive("/hero")} key="page2">
                  🪄 Vote for Hermione
                </Link>
              </li>
              <li>
                <Link
                  to={"/assessment"}
                  className={isActive("/assessment")}
                  key="page3"
                >
                  🗺️ Marauder’s Map Assessment
                </Link>
              </li>
            </ul>
          </div>
          <div className="clock">
            {localStorage.getItem("selectedRole")
              ? JSON.parse(localStorage.getItem("selectedRole") || "")?.actor
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
