import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FooterTop from './Components/Footer/FooterTop';
import FooterCategory from './Components/Footer/FooterCategory';
import Category from './Components/Category/Category';
import FooterBottom from './Components/Footer/FooterBottom';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Category/>
      <FooterTop />
      <FooterCategory /> */}
      <Products/>
      <FooterBottom/>
    </div>
  );
}

export default App;
