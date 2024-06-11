import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TentangKami from "./Components/About/About";
import Footer from "./Components/Footers";
import LayananKami from "./Components/Services/Service";
import Header from "./Components/Navbar";
import AllServices from "./Components/Services/AllServices";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Services" element={<LayananKami />}></Route>
      <Route path="/Services/AllServices" element={<AllServices />}></Route>
      <Route path="/About" element={<TentangKami/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;