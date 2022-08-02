import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import styled from "styled-components";

export default function Today(){
    return(
    <>
        <TopBar/>
        <Top>
            <div>Terça, 02/08</div>
            <h3>Nenhum Hábito Concluido ainda.</h3>
        </Top>


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