import React, { useState } from 'react';
import "./App.css";
import Todoinput from './components/Todoinput';
import ToDoList from './components/ToDoList';

function App() {
   const [listTodo, setlistTodo] = useState([]);

   let addList = (inputText)=>{
    if(inputText!=='')
    setlistTodo([...listTodo,inputText]);//this ... for pehle ki saari cheeze ho fr hmara input text a jaye
   }

   const deleteTask = (key)=>{
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
   }
  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput  addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listitem,i)=>{
          return (
            <ToDoList key={i} index={i} item = {listitem}  deleteItem={deleteTask}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
