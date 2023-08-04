function Landing() {
    const students = ["Erin", "Hernan", "Liam", "Jonathan"];

    return (
        <main>
            <h1>Landing</h1>
            <p>Welcome to our React Starter Site</p>

            {students.map((student, i) => (
                <p key={i}>{student}</p>
            ))}
        </main>
    )
}

export default Landing;