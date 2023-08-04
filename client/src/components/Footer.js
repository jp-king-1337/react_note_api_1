import React from "react";

function Footer(propsObj) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const startYear = 2023;

    return (
        <footer className="row justify-between">
            <p>&copy; {startYear} {currentYear > startYear ? `- ${currentYear}` : ""}</p>
            <p>Developed and Designed by JP King</p>
        </footer>
    );
}

export default Footer;