import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.scss'
import Card from './components/Card'


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


  const shuffleImg = () => {
    const shuffledImg = [...imagesArray, ...imagesArray]
    .sort(() => Math.random() - 0.5)
    .map((img)=>({...img, id: uuidv4(), status: "up"}))

    setCards(shuffledImg);
  }

  const handleTurningCards = (img) => {
      choice1 ? setChoice2(img) : setChoice1(img)
  }

  useEffect(() => {
    if(choice1 && choice2){
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
        reset()
      }else {
        console.log('do not match')
        setTimeout(()=>  reset(),1000)
      }
    }

  },[choice1, choice2])

  console.log(cards)


  const reset = () => {
    setChoice1(null)
    setChoice2(null)

  }

  return (
    <>
      <div className = "Game">
        <h1>Memory Game</h1>
        <button onClick = {shuffleImg}>Start</button>
        <button onClick = {()=>location.reload}>Restart</button>
        <div className ="grid"> 
          {
            cards.map(img => (
              <Card key={img.id} img = {img} status={img.status} handleTurningCards={handleTurningCards} choosed = {img === choice1 || img === choice2 || img.matched}/>
              
            ))
          }

        </div>


      </div>
    </>
  )
}

export default App
