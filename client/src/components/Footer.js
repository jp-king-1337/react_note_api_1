function Footer(propsObj) {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="row justify-between">
            <p>&copy; {year}</p>
            <p>Developed and Designed by JP King</p>
        </footer>
    )
}

export default Footer;