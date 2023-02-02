import './App.css';
import './font_assets/Karla/Karla-VariableFont_wght.ttf';
import './font_assets/Markazi_Text/MarkaziText-VariableFont_wght.ttf';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import {Routes, Route} from 'react-router-dom';
import {useReducer, useEffect} from 'react';

function App() {
  // const settings = { 
  //   method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
  // const api = useEffect(() => {
  //   return fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', settings)
  //   .then(response => response.json())
  //   .then(data => {return data});
  // })

  const seededRandom = function (seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(new Date(date));

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };

  const updateTimes = (state, action) => {
    switch(action.type) {
      case 'setTime': 
        const fetchNewTimes = fetchAPI(action.value);
        return {...state, availableTimes: fetchNewTimes};
      default:
        return state;
    }
  }

  // https://stackoverflow.com/questions/41508342/react-accessing-a-var-from-a-script-in-a-component
  const date = new Date();
  const fetchTimes = fetchAPI(date)

  const initializeTimes = {availableTimes: fetchTimes};
  // const initializeTimes = {availableTimes: ['17:00','18:00','19:00','20:00','21:00',]};

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


