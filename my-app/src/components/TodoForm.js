import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: ""
    })

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            // reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            label="Task"
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <Button type="submit">Add</Button>
        </form>
    );
}

export default TodoForm;