// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page imports
import Landing from "./pages/Landing";

function App() {
    const count = 10;
    const name = "JP";

    return (
        <>
            <Header blah={"blah"} countAmount={count} userName={name} />

            <Landing />

            <Footer count={count} user={name} />
        </>
    );
}

export default App;
