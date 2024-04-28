import "./App.css";
import About_Us from "./components/About_Us";
import Awards from "./components/Awards";
import First from "./components/First";
import Footer from "./components/Footer";
import Get_In_Touch from "./components/Get_In_Touch";
import NavBar from "./components/NavBar";
import Our_Wines from "./components/Our_Wines";
import Story from "./components/Story";
import Visit_Us from "./components/Visit_Us";

function App() {
  return (
    <>
      <NavBar />
      <First />
      <Story />
      <Our_Wines />
      <Visit_Us />
      <About_Us />
      <Awards />
      <Get_In_Touch />
      <Footer />
    </>
  );
}

export default App;
