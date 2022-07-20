import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FooterTop from './Components/Footer/FooterTop';
import FooterCategory from './Components/Footer/FooterCategory';
import Category from './Components/Category/Category';
import FooterBottom from './Components/Footer/FooterBottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category/>
      <FooterTop />
      <FooterCategory />
      <FooterBottom/>
    </div>
  );
}

export default App;
