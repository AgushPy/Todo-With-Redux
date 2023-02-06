import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../utils/createTypes";

const CreateTodo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const task = useRef(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ADD_TODO(task.current.value));
        }}
      >
        <TextField fullWidth type="text" inputRef={task}></TextField>
        <Button type="submit">Añadir</Button>
      </form>
    </>
  );
};

export default CreateTodo;