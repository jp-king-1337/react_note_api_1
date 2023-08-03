function Header(propsObj) {
    return (
        <header className="row justify-between align-center">
            <h3>Logo</h3>
            <nav>
                <a className="active" href="#">Home</a>
                <a className="active" href="#">About</a>
                <a className="active" href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;