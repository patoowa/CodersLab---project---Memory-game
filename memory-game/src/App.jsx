import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.scss'
import Card from './components/Card'


const imagesArray = [
  {"src": "/img/crab.png"},
  {"src": "img/elephant.png"},
  {"src": "/img/giraffe.png"},
  {"src": "/img/hedgehog.png"},
  {"src": "/img/parrot.png"},
  {"src": "/img/penguin.png"}
 
]

function App() {
const [cards, setCards] = useState([])


  const shuffleImg = () => {
    const shuffledImg = [...imagesArray, ...imagesArray]
    .sort(() => Math.random() - 0.5)
    .map((img)=>({...img, id: uuidv4()}))

    setCards(shuffledImg);
  }
  console.log(cards)
  return (
    <>
      <div className = "Game">
        <h1>Memory Game</h1>
        <button onClick = {shuffleImg}>Start</button>

        <div className ="grid">
          {
            cards.map(img => (
              <Card key={img.id} img = {img}/>
              
            ))
          }

        </div>


      </div>
    </>
  )
}

export default App
