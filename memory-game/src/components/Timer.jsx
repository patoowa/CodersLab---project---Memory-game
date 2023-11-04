import React from 'react'
import { useState, useEffect } from 'react'


function Timer({isRunning, resetTimer, isGameOver }) {

    const [time, setTime] = useState(0)
   

    
    useEffect(() => {
      let timer;
  
      if (isRunning && !isGameOver) {
        timer = setInterval(() => {
          setTime(p => p + 1);
        }, 1000);
      }
  
      return () => {
        clearInterval(timer)
      }
    }, [isRunning, isGameOver]);


    useEffect(() => {
      if (resetTimer) {
       setTime(0); 
      }
    }, [resetTimer]);
  
  
    
 
    function formatTime(time) {
        // 00:00:00
    
        const minutes = Math.floor(time / 6000);
        const seconds = Math.floor(time / 100) % 60;
        const miliseconds = time % 60;
    
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`;
      }
  
    return (
      <>
        <h1>Time: {formatTime(time)}</h1>
      </>
    )
  
  }
  

  export default Timer