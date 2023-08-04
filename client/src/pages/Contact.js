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
        const stateProp = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData, // This ensures that we don't lose the values of whichever thing we're not typing in
            // If typing userName, it ensures that email and message don't clear out
            [stateProp]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const url = "https://api.web3forms.com/submit";
        const access_key = process.env.ACCESS_KEY;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
    }

    return (
        <main>
            <h1 className="text-center">Contact Me</h1>

            {/* An example to assist understanding of how handleInputChange() works */}
            {/* <p>userName: {formData.userName}</p>
            <p>email: {formData.email}</p>
            <p>message: {formData.message}</p> */}

            <form
                onSubmit={handleSubmit}
                className="column">
                <input type="hidden" name="access_key" value={access_key} />
                <input
                    name="userName"
                    onChange={handleInputChange}
                    value={formData.userName}
                    type="text"
                    placeholder="Enter name" />
                <input
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter email address" />
                <textarea
                    name="message"
                    onChange={handleInputChange}
                    cols="30"
                    rows="10"
                    placeholder="Enter your message" />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default Contact;