import React, { useState } from "react";

function Landing() {
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState(["Erin", "Hernan", "Liam", "Jonathan"]);

    const handleNameInput = (event) => {
        setStudentName(event.target.value);
    }

    return (
        <main>
            <h1>Landing</h1>
            <p>Welcome to our React Starter Site</p>

            <p style={{ background: studentName }}>{studentName}</p>

            <h3>Student List:</h3>
            {students.map((student, i) => (
                <p key={i}>{student}</p>
            ))}

            <input onChange={handleNameInput} type="text" placeholder="Type student name" />
            <button onClick={() => setStudents([...students, studentName])}>Add Student</button>
        </main>
    )
}

export default Landing;