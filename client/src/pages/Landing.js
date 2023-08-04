function Landing() {
    const [students, setStudents] = useState(["Erin", "Hernan", "Liam", "Jonathan"]);

    return (
        <main>
            <h1>Landing</h1>
            <p>Welcome to our React Starter Site</p>

            <h3>Student List:</h3>
            {students.map((student, i) => (
                <p key={i}>{student}</p>
            ))}
        </main>
    )
}

export default Landing;