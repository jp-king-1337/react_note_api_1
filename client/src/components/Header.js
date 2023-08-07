import { NavLink } from "react-router-dom";

function Header(props) {
    const toggleMode = () => {
        props.setDarkMode(!props.darkMode);
    }

    return (
        <header className="row justify-between align-center">
            <h3>Logo</h3>

            <div className="toggle-wrapper row align-center">
                <p>Light</p>
                <div onClick={toggleMode} className={`toggle-bar ${props.darkMode ? "dark-mode" : "light-mode"}`}>
                    <span className={`toggle ${props.darkMode ? "dark-mode" : "light-mode"}`}></span>
                </div>
                <p>Dark</p>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;