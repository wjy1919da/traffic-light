import { useState,useEffect } from 'react'
import './App.css'
import { debounce } from './debounce';
function App() {
  const config = {
    red: {
      duration: 4000,
      next: 'green',
    },
    yellow: {
      duration: 500,
      next: 'red',
    },
    green: {
      duration: 3000,
      next: 'yellow',
    }
  };
  const handleOnClick = debounce(()=>setCounter(counter + 1),1000);
  const [color, setColor] = useState('green');
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    const {duration,next} = config[color];
    const timer = setTimeout(()=>{
      setColor(next);
    },duration);
    return ()=>{
      clearTimeout(timer);
    }
  },[color])
 
  return (
    <>
      <div style={{
        display: 'flex',
        width: '100px',
        height: '50px',
        backgroundColor: color
      }}>
      </div>
      <div>
        <h1>{counter}</h1>
        <button onClick={handleOnClick}>Counter</button>
      </div>
  </>
  )
}

export default App
