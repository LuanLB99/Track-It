import styled from "styled-components";
import foto from './img/arrasca.jpeg'

export default function TopBar(){
    return(
        <Container>
        <div>TrackIt</div>
        <img src={foto}/>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 0;
    width:100%;
    height: 60px;
    background: #126BA5;

    img{
        width: 50px;
        height:50px;
        position:relative;
        right: 30px;
        top: 5px;
        border-radius: 100px;
        object-fit:cover;
    }

    div {
        top: 10px;
        left: 10px;
        position:relative;
        font-size: 30px;
        font-weight: bold;
        color:white;
    }

`