import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ navBackground, headingBackground, navTextColor }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = (id) => {
    setOpenMenu(id);
  };

  const handleCloseMenu = (id) => {
    setOpenMenu(null);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="nav-sandwich" onClick={handleToggleMenu}>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios/100/ffffff/menu--v1.png"
          alt="menu--v1"
        />
      </div>

      <div
        className={`nav-bar`}
        style={{
          backgroundColor: navBackground ? navBackground : "transparent",
          display: showMenu ? "flex" : "none",
        }}
      >
        <div
          className="logo"
          style={{ visibility: headingBackground ? "visible" : "hidden" }}
        >
          <Link to="/">Home</Link>
        </div>
        <div className="all-menu-items">
          <div className="menu-dropdown">
            <div
              onMouseEnter={() => handleOpenMenu(1)}
              className="menu-heading"
              style={{
                backgroundColor: headingBackground
                  ? headingBackground
                  : "rgba(0,0,0,0.8)",
                color: navTextColor && navTextColor,
              }}
            >
              About
            </div>
            <div
              className={`menu-item-container ${
                openMenu && openMenu === 1 ? "showMainMenu" : "hideMainMenu"
              }`}
              onMouseLeave={() => handleCloseMenu(1)}
            >
              <div className="menu-item">Our Mission</div>
              <div className="menu-item">
                <Link to="/team">Our Team</Link>
              </div>
              <div className="menu-item">Documentation</div>
            </div>
          </div>

          <div className="menu-dropdown">
            <div
              className="menu-heading"
              style={{
                backgroundColor: headingBackground
                  ? headingBackground
                  : "rgba(0,0,0,0.8)",
                color: navTextColor && navTextColor,
              }}
              onMouseEnter={() => handleOpenMenu(2)}
            >
              Education
            </div>
            <div
              className={`menu-item-container ${
                openMenu && openMenu === 2 ? "showMainMenu" : "hideMainMenu"
              }`}
              onMouseLeave={() => handleCloseMenu(2)}
            >
              <div className="menu-item">Workshops</div>
              <div className="menu-item">Practice</div>
              <div className="menu-item">Yoga</div>
            </div>
          </div>

          <div className="menu-dropdown">
            <div
              className="menu-heading"
              style={{
                backgroundColor: headingBackground
                  ? headingBackground
                  : "rgba(0,0,0,0.8)",
                color: navTextColor && navTextColor,
              }}
              onMouseEnter={() => handleOpenMenu(3)}
            >
              Research
            </div>
            <div
              className={`menu-item-container ${
                openMenu && openMenu === 3 ? "showMainMenu" : "hideMainMenu"
              }`}
              onMouseLeave={() => handleCloseMenu(3)}
            >
              <div className="menu-item">Psychology</div>
              <div className="menu-item">Wellness</div>
              <div className="menu-item">Mindfulness</div>
            </div>
          </div>

          <div className="menu-dropdown">
            <div
              className="menu-heading"
              style={{
                backgroundColor: headingBackground
                  ? headingBackground
                  : "rgba(0,0,0,0.8)",
                color: navTextColor && navTextColor,
              }}
              onMouseEnter={() => handleOpenMenu(4)}
            >
              Get Involved
            </div>
            <div
              className={`menu-item-container ${
                openMenu && openMenu === 4 ? "showMainMenu" : "hideMainMenu"
              }`}
              onMouseLeave={() => handleCloseMenu(4)}
            >
              <div className="menu-item">Donate</div>
              <div className="menu-item">Volunteer</div>
              <div className="menu-item">Participate</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
