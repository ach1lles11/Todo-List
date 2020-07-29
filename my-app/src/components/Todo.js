import React from 'react';
import { IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Todo = ({ todo, removeTodo }) => {
    const handleRemoveClick = () => {
        removeTodo(todo.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Typography variant='body1'>
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
};

export default Todo;