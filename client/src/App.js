// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page imports
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    const page = "landing";

    return (
        <>
            <Header blah={"blah"} countAmount={count} userName={name} />

            <Landing />

            <About />

            <Contact />

            <Footer count={count} user={name} />
        </>
    );
}

export default App;