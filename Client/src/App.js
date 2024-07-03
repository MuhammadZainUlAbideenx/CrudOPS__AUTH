import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
