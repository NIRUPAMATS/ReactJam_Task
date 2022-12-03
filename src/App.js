import React,{useState} from 'react'

const App=()=>{
  const [number,setnumber]=useState(10)
  const [Colour,setColour]=useState('cold')

  const increase=()=>{
    if(number===30)return
    const newNumber=number+1
    if(newNumber>=15){
      setColour('red')
    }
    setnumber(newNumber)
  }
  const decrease=()=>{
    if(number===-10)return
    const newNumber=number-1
    if(newNumber<15){
      setColour('blue')
    }
    
    setnumber(newNumber)
  }

  return <div className='app-container'>
    <div className="display-container">
      <div className={`display ${Colour}`}>{number}
      </div>
    </div>
    <div className="button-container">
      <button onClick={()=>decrease()}>-</button>
      <button onClick={()=>increase()}>+</button>
    </div>
  </div>
}
export default App