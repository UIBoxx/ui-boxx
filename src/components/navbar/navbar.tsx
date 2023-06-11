import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import { useRef, useState } from "react";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";


function MyNavBar() {
  const navItems = ["Home", "UI-Components", "Tools"];
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <div className="navbar">
      <div className="n-left">
        <a href="/"><img src="https://uiboxx.in/assets/transparent-a4c1d21d.png" alt="" /></a>
      </div>
      <nav ref={navRef}>
        {navItems.map((items, index) => (
          <li
            className={selectedIndex === index ? "active" : ""}
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={items}
          >
            <a href={items === "Home" ? "/" : items}>{items}</a>
            
          </li>
        
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
    </div>
  );
}

export default MyNavBar;
