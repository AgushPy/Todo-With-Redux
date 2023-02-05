import { Avatar, Link, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { COMPLETE_TODO, DELETE_TODO } from "../utils/createTypes";
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

export const Todo = ({ todo,id }) => {

    const dispatch = useDispatch();

    useEffect(() =>{
      
    },[todo])
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {todo.complete? <CheckIcon/> : <Link onClick={e => dispatch(COMPLETE_TODO(id))}><DoNotDisturbOnIcon/></Link>}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={todo.task} secondary={todo.date} />
        <Link onClick={e => dispatch(DELETE_TODO(id))}><DeleteIcon /></Link>
      </ListItem>
    </>
  );
};
