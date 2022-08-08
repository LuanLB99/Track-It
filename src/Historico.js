import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import styled from "styled-components";

export default function Historico(){
    return(
        <>
         <TopBar/>
        <Top>
            <div>Histórico</div>
        </Top>
        <Hist>Em breve você poderá ver o histórico dos seus hábitos aqui!</Hist>
        <BottomBar/>
        </>
    )
}

const Top = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom:10px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    div{
        margin-top: 20px;
        font-size: 20px;
        color: #126BA5;
    }
`

const Hist = styled.h4`
       color:#666666;
       margin: 0 auto;
       width: 90%;
`