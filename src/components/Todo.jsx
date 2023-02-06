import { Avatar, Link, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { COMPLETE_TODO, DELETE_TODO } from "../utils/createTypes";
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { Container } from "@mui/system";

export const Todo = ({ todo,id }) => {

    const dispatch = useDispatch();

    useEffect(() =>{
      
    },[todo])
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {todo.complete? <Link onClick={e => dispatch(COMPLETE_TODO(id))}><CheckIcon/></Link> : <Link onClick={e => dispatch(COMPLETE_TODO(id))}><DoNotDisturbOnIcon/></Link>}
          </Avatar>
        </ListItemAvatar>
        <Container maxWidth={'100%'} sx={{textAlign:'left'}}>
        <ListItemText primary={<Typography >{todo.task}</Typography>} secondary={todo.date} />
        </Container>
        <Link onClick={e => dispatch(DELETE_TODO(id))}><DeleteIcon /></Link>
      </ListItem>
    </>
  );
};
