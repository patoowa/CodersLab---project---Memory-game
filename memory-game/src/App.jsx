import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.scss'
import Card from './components/Card'
import Timer from './components/Timer';
import Lives from './components/Lives'
import GameOver from './components/GameOver'


const imagesArray = [
  {"src": "/img/crab.png", matched: false},
  {"src": "img/elephant.png", matched: false},
  {"src": "/img/giraffe.png", matched: false},
  {"src": "/img/hedgehog.png", matched: false},
  {"src": "/img/parrot.png", matched: false},
  {"src": "/img/penguin.png", matched: false}
 
]

function App() {
const [cards, setCards] = useState([])
const [choice1, setChoice1] = useState(null)
const [choice2, setChoice2] = useState(null)
const [off, setOffState] = useState(false)
const [lives, setLives] = useState(3);
const [attempts, setAttempts] = useState(0);
const [gameOver, setGameOver] = useState(false);


//timer 
const [isRunning, setIsRunning] = useState(false);



  const shuffleImg = () => {
    const shuffledImg = [...imagesArray, ...imagesArray]
    .sort(() => Math.random() - 0.5)
    .map((img)=>({...img, id: uuidv4(), status: "up"}))

    setCards(shuffledImg);
    setIsRunning(true);
    setLives(3); //Reset lives when starting
    setAttempts(0)
  }

  const handleTurningCards = (img) => {
      choice1 ? setChoice2(img) : setChoice1(img)
  }

  useEffect(() => {
    if(choice1 && choice2){
      setOffState(true)

      if(choice1.src === choice2.src){
        setCards(p => {
          return p.map(img => {
            if(img.src === choice1.src){
              return{...img, matched: true}
            }else {
              return img
            }
          })
        })
        reset();
      } else {
        console.log('do not match')
        setTimeout(()=>  {
          reset();
          if(lives > 0) {
            setLives(lives - 1);
          }else {
            setGameOver(true);  //add game over UI
          }
        },1000)
      }
    }

  },[choice1, choice2])

  console.log(cards)


  const reset = () => {
    setChoice1(null)
    setChoice2(null)
    setOffState(false)
    setAttempts(attempts + 1)

  }

  return (
    <>
      <div className = "Game">
        <h1>Memory Game</h1>
        <button onClick = {shuffleImg}>Start</button>
        {/* <button onClick = {()=>location.reload}>Restart</button> */}
        <div className="grid-container">
          {gameOver ? <GameOver /> : null}
          <div className ="grid"> 
            {
              cards.map(img => (
                <Card key={img.id} img = {img} status={img.status} handleTurningCards={handleTurningCards} choosed = {img === choice1 || img === choice2 || img.matched} off={off} gameOver={gameOver}/>
                
              ))
            }

          </div>
        </div>
      </div>  

          <Timer isRunning={isRunning} />
          <Lives lives={lives} />
          


    </>
  )
}

export default App
