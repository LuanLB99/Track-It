import styled from 'styled-components';
import elipse from './img/Ellipse.png';


export default function BottomBar(){
    return(
    <Footer>
        <div>Habitos</div>
        <Circ>
        <Button><img src={elipse} alt="elipse"/> <div>Hoje</div></Button>
            
        </Circ>    
        <div>Histórico</div>     
    </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    height: 50px;
    background: crimson;
    position: absolute;
    bottom: 0px;
    display:flex;
    justify-content:space-around;
    align-itens: center;
    color:white;

`
const Circ = styled.div`
    position: relative;
    bottom: 50px;
`

const Button = styled.div`
    position: absolute;
    display: inline-block;

    div{
        position: relative;
    }
`