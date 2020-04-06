import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

// My App function component
function App() {
 
 	return ( 
     <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  );
}

export default App;
