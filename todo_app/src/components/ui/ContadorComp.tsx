import { useState } from 'react'
import Button from './Button'

function ContadorComp() {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Contador')
  
    function handleIncrement() {
      setCount((count) => count + 1)
      setTitle('Contador Incrementado')
    }
  
    function handleDecrement() {
      setCount((count) => count - 1)
      setTitle('Contador Decrementado')
    }
  
    function handleReset() {
      setCount(0)
      setTitle('Contador Reseteado')
    }
  
    return (
      <>
        <div>
          <h2>{title}: { count }</h2>
        </div>
        <div>
          <Button onClick={handleIncrement} text="Incrementar" classes="bg-blue border-5" />
  
          <Button onClick={handleReset} text="Reset" classes="bg-red border-2" />
  
          <Button onClick={handleDecrement} text="-" classes="" />
        </div>
      </>
    )
  }

export { ContadorComp };