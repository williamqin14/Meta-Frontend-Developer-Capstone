import './App.css';
import './font_assets/Karla/Karla-VariableFont_wght.ttf';
import './font_assets/Markazi_Text/MarkaziText-VariableFont_wght.ttf';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import {Routes, Route} from 'react-router-dom';
import {useReducer, useEffect} from 'react';

function App() {
  const updateTimes = (state, action) => {
    switch(action.type) {
      case 'setTime': 
        return {...state, availableTimes: action.value}
      default:
        return state;
    }
  }

  const initializeTimes = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
    <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage  state={state} dispatch={dispatch}/>}></Route>
    </Routes>
    </>
  );
}

export default App;

export const initializeTimes = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};


