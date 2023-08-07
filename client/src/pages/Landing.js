import { addName } from "../utils";

function Landing(props) {

    const handleNameInput = (event) => {
        props.setStudentName(event.target.value);
    }

    const addStudent = () => {
        const names = addName(props.studentName)
        props.setStudents([...names]);
        props.setStudentName("");
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addStudent();
        }
    }

    return (
        <main>
            <h1>Landing</h1>
            <p>Welcome to our React Starter Site</p>

            <h3>Student List:</h3>

            {!props.students.length && <p>No students have been added.</p>}

            {props.students.map((student, i) => (
                <p key={i}>{student}</p>
            ))}

            <input onChange={handleNameInput} onKeyDown={handleKeyPress} value={props.studentName} type="text" placeholder="Type student name" />
            <button onClick={addStudent}>Add Student</button>
        </main>
    )
}

export default Landing;