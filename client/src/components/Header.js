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

    return (
        <header className="row justify-between align-center">
            <h3>Logo</h3>
            <nav>
                <a onClick={changePage} className={propsObj.page === "landing" ? "active" : ""} href="#">Home</a>
                <a onClick={changePage} className={propsObj.page === "about" ? "active" : ""} href="#">About</a>
                <a onClick={changePage} className={propsObj.page === "contact" ? "active" : ""} href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;