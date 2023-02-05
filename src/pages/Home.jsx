import { Container } from "@mui/system";
import React from "react";
import CreateTodo from "../components/CreateTodo";
import { Navbar } from "../components/Navbar";
import { TodoList } from "../components/TodoList";

function Home(){
    return(
        <>
            <Container sx={{justifyContent:'center'}}>
            <Navbar/>
            <CreateTodo />
            <TodoList/>
            </Container>
        </>
    )
}

export default Home;