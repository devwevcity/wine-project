import "./App.css";
import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import First_Home from "./components/First_Home";
import Footer from "./components/Footer";
import Forth from "./components/Forth";
import GetInTouch from "./components/GetInTouch";
import NavBar from "./components/NavBar";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <>
      <NavBar />
      <First_Home />
      <Second />
      <Third />
      <Forth />
      <AboutUs />
      <Awards />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
