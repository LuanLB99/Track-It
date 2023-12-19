import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./AppContext/Context";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import Today from './Today';
import Historico from "./Historico";



export default function App(){

    const [user, setUser] = useState({});
    const {progress, setProgress} = useState([]);

    return(
    <AppStyled>
    <UserContext.Provider value={{user, setUser}}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login /> }/> 
            <Route path="/cadastro" element={<Sign />}/>
            <Route path="/habitos" element={<Home />}/>
            <Route path="/hoje" element={<Today />}/>
            <Route path="/historico" element={<Historico/>} /> 
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </AppStyled>
    )
}

const AppStyled = styled.main`
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    background:#E5E5E5;
    height: 600px;
    overflow: hidden;
`