import React, { useState } from "react";

function Contact() {
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        message: ""
    });

    const handleInputChange = event => {
        console.log(event.target.value);
    };

    return (
        <main>
            <h1 className="text-center">Contact Me</h1>

            <form className="column">
                <input onChange={handleInputChange} value={formData.userName} type="text" placeholder="Enter name" />
                <input onChange={handleInputChange} type="email" placeholder="Enter email address" />
                <textarea onChange={handleInputChange} cols="30" rows="10" placeholder="Enter your message" />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default Contact;