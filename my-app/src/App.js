import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {  
  const[todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <div className="Header">
        <h1>TodoManager</h1>
      </div>
      <div className="App">
          <Typography variant="h2">
            Things to do
          </Typography>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos}
            removeTodo={removeTodo}
          />
      </div>
    </div>
  );
}

export default App;