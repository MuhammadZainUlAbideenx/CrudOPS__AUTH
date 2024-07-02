import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './AddUser';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route index element={<Home />} />
          <Route path="adduser" element={<AddUser />} >
          
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
