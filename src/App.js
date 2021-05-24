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


    return (
      <div className="pomodoro">
        <h1>Pomodoro</h1>
        <Timer sessionTime = {sessionTime} pomodorosCounter={handlePomodorosCounter}/>
        <p>Pomodoros Completed: <b>{pomodorosCounter}</b></p>
        <button>Pause</button>
        <button>Long Break</button>
        <button>Short Break</button>
      </div>
    );
};


export default App;
