function Header(propsObj) {
    const changePage = (event) => {
        event.preventDefault();

        const link = event.target;
        const text = link.innerText;

        switch (text) {
            case "About":
                propsObj.setPage("about");
                break;
            case "Contact":
                propsObj.setPage("contact");
                break;
            default:
                propsObj.setPage("landing");
        }
    }

    const toggleMode = () => {
        propsObj.setDarkMode(!propsObj.darkMode);
    }

    return (
        <header className="row justify-between align-center">
            <h3>Logo</h3>

            <div className="toggle-wrapper row align-center">
                <p>Light</p>
                <div onClick={toggleMode} className={`toggle-bar ${propsObj.darkMode ? "dark-mode" : "light-mode"}`}>
                    <span className={`toggle ${propsObj.darkMode ? "dark-mode" : "light-mode"}`}></span>
                </div>
                <p>Dark</p>
            </div>

            <nav>
                <a onClick={changePage} className={propsObj.page === "landing" ? "active" : ""} href="#">Home</a>
                <a onClick={changePage} className={propsObj.page === "about" ? "active" : ""} href="#">About</a>
                <a onClick={changePage} className={propsObj.page === "contact" ? "active" : ""} href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;