import React, {useState, useEffect} from "react";
import logo from "../img/logo.png"
export default function Header() {
    const [choice, setChoice] = useState("Home");
    const [shadow, setShadow] = useState(false)


    const changeTab = (event) => {
        console.log(event.target.innerHTML)
        setChoice(event.target.innerHTML)
    }


    useEffect(() => {
        if (window) {
            window.addEventListener("scroll", () =>
                setShadow(window.pageYOffset > 50)
            );
        }
    }, []);

    

    return (
      <header className={`header ${shadow ? "shadow small" : ""}`}>
        <div className="header__title">
          <img src={logo} className="header__logo" alt="logo"></img>
          <h1 className="header__text">PassingMiles.in</h1>
        </div>

        <nav className="header__navbar">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="header__list">
            <li
              className={`header__item ${choice === "Home" ? "selected" : ""}`}
            >
              <a href="#home" className="header__link" onClick={changeTab}>
                Home
              </a>
            </li>
            <li
              className={`header__item ${
                choice === "Videos" ? "selected" : ""
              }`}
            >
              <a href="#youtube" className="header__link" onClick={changeTab}>
                Videos
              </a>
            </li>
            <li
              className={`header__item ${choice === "About" ? "selected" : ""}`}
            >
              <a href="mailto:passingmiles7@gmail.com" className="header__link" >
                Contact Us
              </a>
            </li>
            
          </ul>
        </nav>
      </header>
    );
}
