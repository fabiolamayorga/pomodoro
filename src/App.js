import './App.css';
import { useEffect, useState } from 'react';
import Timer from './components/Timer';

const App = () => {
    // const [state, setState] = useState({
    //   sessionTime: 25,
    //   break: 5,
    //   timer: 25*60,
    //   isSessionNow: true,
    //   isPaused: false,
    //   isUpdated: false,
    //   pomodorosCounter: 1
    // }); 
    const [sessionTime, setSessionTime] = useState(25);
    const [pomodorosCounter, setPomodorosCounter] = useState(1);

   
    const startPomodoro = () => {

    };

    const pausePomodoro = () => {

    }


    const handlePomodorosCounter = () => {
      // setState({
      //   ...state,
      //   pomodorosCounter: pomodorosCounter++,
      // });
      setPomodorosCounter(pomodorosCounter + 1);
    }
    // let year = new Date().getFullYear();
    // const difference = +new Date(`10/01/${year}`) - +new Date();

    // let timeLeft = {};

    // if (difference > 0) {
    //   timeLeft = {
    //     minutes: Math.floor((difference / 1000 / 60) % 60),
    //     seconds: Math.floor((difference / 1000) % 60)
    //   };
    // }


    // useEffect(() => {
    //   const date = new Date();
    //   console.log(date);
    // });

    return (
      <div className="pomodoro">
        <h1>Pomodoro</h1>
        <Timer sessionTime = {sessionTime} pomodorosCounter={handlePomodorosCounter}/>
        <p>Sessions Completed: <b>{pomodorosCounter}</b></p>
        <button>Pause</button>
        <button>Long Break</button>
        <button>Short Break</button>
      </div>
    );
};


export default App;
