import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
import Videoplayer from './Components/Videoplayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
       Sam-Sarah Caterers Coming Live soon.........</div>
       <div>
       Reach out to us on below contacts</div>
       <div>
       email:- samsarahcaterers@gmail.com</div>
         <div>
          Contact Information :-  +91 9822447649
       </div>
      </header>
      <Carousel></Carousel>
      <Videoplayer></Videoplayer>
    </div>
  );
}

export default App;
