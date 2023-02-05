import { List } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './Todo';

export const TodoList = () => {

    const todos = useSelector(state => state);

  return (
    <>
        <List>
        {todos.map((todo,index) => <Todo todo={todo} id={index}  key={index}/>)}
        </List>
    </>
  )
}
