import { List } from '@material-ui/core';
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => {
    return (
        <List>
            {todos.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo}
                removeTodo={removeTodo}
                />
            ))}
        </List>
    );
}

export default TodoList;