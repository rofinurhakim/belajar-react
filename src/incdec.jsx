import {useState} from 'react'

const IncrementDecrement = () => {
    const [count,setCount] = useState (0)
    const increment = () => {
        setCount(count + 1)

    }
    const decrement = () => {
        setCount(count - 1)

    }
    return (
        <>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        
        </>
    )
    }
   

export default IncrementDecrement
