import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import { useRef, useState } from "react";
import { faAngleRight, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { To, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';



function MyNavBar() {

  const navItems = ["Home", "UI-Components", "Tools","Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const navigate = useNavigate();
  const handleClick = (link: To) => {
    navigate(link); // Use the absolute path to navigate to "/tools"
  };

  const navRef = useRef<HTMLDivElement>(null);
  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <div className="navbar">
      <div className="n-left">
        <a href="/"><img src={Logo} alt="" /></a>
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
            <a onClick={()=>handleClick(items === "Home" ? "/" : items)} href="">{items}</a>
            
          </li>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faAngleRight} rotation={270} />
        </button>
      </nav>
      <a id="gen-a" href="/generate"><button id="gen-b">Generate UI</button></a>
      <button className="nav-btn" onClick={showNavBar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </button>
    </div>
  );
}

export default MyNavBar;
