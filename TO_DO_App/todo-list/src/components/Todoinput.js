import React, { useState } from 'react'


const Todoinput = (props) => {

  const [inputText, setinputtext] = useState("")
  return (
    <div className="input-container">
      <input type="text" 
      className = "input-box-todo" 
      placeholder="Enter your ToDo"
      value={inputText}
        onChange={
          e=>{
            setinputtext(e.target.value)
          }
        }/>
      <button className = "add-btn" onClick={()=>{
        props.addList(inputText)
        setinputtext("")
      }}>+</button>
    </div>
  )
}

export default Todoinput
