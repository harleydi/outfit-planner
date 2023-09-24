import { useState } from 'react'
import './App.css'
import {clothing} from './data'

function App() {
  const [count, setCount] = useState(0)
  const [tops, setTops] = useState()
  const [bottoms, setBottoms] = useState()
  const [shoes, setShoes] = useState()
  const [selectedTop, setSelectedTop] = useState()
  const [selectedBottom, setSelectedBottom] = useState()
  const [selectedShoe, setSelectedShoe] = useState()

  const fillTypes = async () => {
    const fillTops = await clothing.filter(item => item.type === 'top')
    let fillBottoms = clothing.filter((item) => item.type === 'bottom')
    let fillShoes = clothing.filter((item) => item.type === 'shoes')
    setTops(fillTops)
    setBottoms(fillBottoms)
    setShoes(fillShoes)
    console.log(fillTops)
    console.log('inside fill')
    console.log(tops)
  }
  // fillTypes()
  // console.log('outside')
  // console.log(tops)
  
  
  const displayFit = async (e) => {
    await fillTypes()
    console.log('inside fit')
    await console.log(tops);
    let category = e.target.name
    switch (category) {
      case 'casual':
        let top = tops.filter((item) => item.dressCode === 'casual')
        let bottom = bottoms.filter((item) => item.dressCode === 'casual')
        let shoe = shoes.filter((item) => item.dressCode === 'casual')
        setSelectedTop(top[Math.floor(top.length * Math.random())].imageUrl)
        setSelectedBottom(bottom[Math.floor(bottom.length * Math.random())].imageUrl)
        setSelectedShoe(shoe[Math.floor(shoe.length * Math.random())].imageUrl)
        console.log(selectedTop)
        break;
      case 'sport':
        let stop = tops.filter((item) => item.dressCode === 'sport')
        let sbottom = bottoms.filter((item) => item.dressCode === 'sport')
        let sShoe = shoes.filter((item) => item.dressCode === 'sport')
        setSelectedTop(stop[Math.floor(stop.length * Math.random())].imageUrl)
        setSelectedBottom(sbottom[Math.floor(sbottom.length * Math.random())].imageUrl)
        setSelectedShoe(sShoe[Math.floor(sShoe.length * Math.random())].imageUrl)
        break
      case 'formal':
        let ftop = tops.filter((item) => item.dressCode === 'formal')
        let fbottom = bottoms.filter((item) => item.dressCode === 'formal')
        let fshoe = shoes.filter((item) => item.dressCode === 'formal')
        setSelectedTop(ftop[Math.floor(ftop.length * Math.random())].imageUrl)
        setSelectedBottom(fbottom[Math.floor(fbottom.length * Math.random())].imageUrl)
        setSelectedShoe(fshoe[Math.floor(fshoe.length * Math.random())].imageUrl)
      default:
        break;
    }
  }

  return (
    <>
      <div>
        <h1 className='title'>Outfit Planner</h1>
        <p className='subtitle'>Find what to wear</p>
      </div>
      <h5>Fasion Styles / Dress Code</h5>
      <button name='casual' onClick={displayFit}>Casual</button>
      <button name='sport' onClick={displayFit}>Sport</button>
      <button name='formal' onClick={displayFit}>Formal</button>
      <div>
        <h2>Top</h2>
        <img src={selectedTop} />
      </div>
      <div>
        <h2>Bottom</h2>
        <img src={selectedBottom} />
      </div>
      <div>
        <h2>Shoes</h2>
        <img src={selectedShoe} />
      </div>
    </>
  )
}

export default App
