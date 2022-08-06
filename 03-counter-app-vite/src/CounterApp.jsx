import {useState} from 'react'
import PropTypes from "prop-types";


export const CounterApp = ({value}) => {
  const [counter, setcounter] = useState (value);


  const handleAdd = ()=>{
    setcounter(counter+1);
  }
  const handleSubs = ()=>{
    setcounter(counter-1);
  }
  const handleReset = ()=>{
    setcounter(value);
  }
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button aria-label='sumar' onClick={handleAdd}>+1</button>
        <button aria-label='restar' onClick={handleSubs}>-1</button>
        <button aria-label='reinicar' onClick={handleReset}>reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
  
