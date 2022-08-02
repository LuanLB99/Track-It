import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";


export default function App(){
    return(
    <AppStyled>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login /> }/> 
            <Route path="/cadastro" element={<Sign />}/>
            <Route path="/habitos" element={<Home />}/>      
        </Routes>
    </BrowserRouter>
    </AppStyled>
    )
}

const AppStyled = styled.main`
    box-sizing:border-box;
    background:lightblue;
    height:600px;
`