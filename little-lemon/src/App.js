import './App.css';
import './font_assets/Karla/Karla-VariableFont_wght.ttf';
import './font_assets/Markazi_Text/MarkaziText-VariableFont_wght.ttf';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
