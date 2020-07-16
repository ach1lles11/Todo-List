import React from 'react';

function Todo({ todo, removeTodo }) {
    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div style={{ display: "flex" }}>
            <li 
                style={{
                    color: "white"
                }}
            >
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;