import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Navbars/Navbars";
import "./Components/Navbars/Navbars";
import OurStory from "./Components/OurStory/OurStory";
import OurSolutions from "./Components/OurSolutions/OurSolutions";
import CompleteCycle from "./Components/CompleteCycle/CompleteCycle";
import FastDelivery from "./Components/FastDelivery/FastDelivery";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <>
      {/* <Navbars /> */}
      <Navigation />
      <HomePage />
      <OurStory />
      <CompleteCycle />
      <OurSolutions />
      <FastDelivery />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
