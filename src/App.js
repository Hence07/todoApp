import React from 'react';
import './App.css';
import todosData from './components/todosData';
import TodoItem from './components/TodoItem';

// My App function component
function App() {
 const todoItems = todosData.map(function(item){
   return(
     <TodoItem key={item.id}  item={item}/>
   )
 })
 	return ( 
     <div className="todo-list">
        {todoItems}
    </div>
  );
}

export default App;
