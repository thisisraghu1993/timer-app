import {useEffect, useState, useRef} from "react";
export default function Counter({timerValue = 15}) {
  let [timer, setTimer] = useState(timerValue);
  let timerRef = useRef(timerValue);
  timerRef.current = timer;
  useEffect(() => {
    let intr = setInterval(() => {
      if(timerRef.current > 0) {
        setTimer(val => val - 1);
      } else {
        clearInterval(intr)
      }
    }, 1000)
  }, [])
  const getJSX = () => {
    if(timer > 0) {
      return <h1>Expires In  {timer} Seconds</h1>
    } else {
      return <h1>Counter Reached</h1>
    }
  }
  return (
    <div className="App">
      {
        getJSX()
      }
    </div>
  );
}