
const Timer = ({sessionTime, pomodorosCounter}) => {

    return (
        <div>
            <p>Session</p>
            <p>{sessionTime}</p>
            <button onClick={pomodorosCounter}>Start session</button>
        </div>
    )
}

export default Timer;