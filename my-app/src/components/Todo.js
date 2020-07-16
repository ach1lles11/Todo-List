import React from 'react';

function Todo({ todo }) {
//     function handleRemoveClick() {
//         removeTodo(todo.id);
//     }

    return (
        <div style={{ display: "flex" }}>
            <li 
                style={{
                    color: "white"
                }}
            >
                {todo.task}
            </li>
            <button>X</button>
        </div>
    );
}

export default Todo;