import React from 'react';
import Todo from './Todo';

function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo}
                removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;