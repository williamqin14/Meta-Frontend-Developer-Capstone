import './App.css';
import './font_assets/Karla/Karla-VariableFont_wght.ttf';
import './font_assets/Markazi_Text/MarkaziText-VariableFont_wght.ttf';
import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;
