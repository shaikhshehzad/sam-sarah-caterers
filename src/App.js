// import logo from './logo.svg';
import './App.css';
// import Carousel from './Components/Carousel';
// import Videoplayer from './Components/Videoplayer';
// import Header from './Components/Header';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <div>
    //    Sam-Sarah Caterers Coming Live soon.........</div>
    //    <div>
    //    Reach out to us on below contacts</div>
    //    <div>
    //    email:- samsarahcaterers@gmail.com</div>
    //      <div>
    //       Contact Information :-  +91 9822447649
    //    </div>
    //   </header>
    //   <Carousel></Carousel>
    //   <Videoplayer></Videoplayer>
    // </div>
    <BrowserRouter>
    <div  className="App" >
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"   >SamSarah Caterers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services"  >Services</Nav.Link>
            {/* <Nav.Link as={Link} to="/services"  >Services</Nav.Link> */}
            <Nav.Link as={Link} to="/contact"  >Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about"  >About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
    
          <Route path="/about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/" element={<Home/>}/>



        </Routes>

      </div>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
