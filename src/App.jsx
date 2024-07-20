import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Sports from "./Components/pages/Sports";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";
import NotFound from "./Components/notFoundPage/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
