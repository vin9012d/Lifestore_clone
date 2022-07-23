import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import FooterTop from './Components/Footer/FooterTop';
import FooterCategory from './Components/Footer/FooterCategory';
import Category from './Components/Category/Category';
import FooterBottom from './Components/Footer/FooterBottom';
import AllAdd from './Components/Producct1/AllAdd';
import BottomCategory from './Components/Producct1/Bottomcategory';
import MiddleCategory from './Components/Producct1/MiddleCategory';

function App() {
  return (
    <div className="App">
      <AllAdd />
      <MiddleCategory/>
      <BottomCategory/>
      <Navbar />
      <Category/>
      <FooterTop />
      <FooterCategory />
      <FooterBottom/>
    </div>
  );
}

export default App;
