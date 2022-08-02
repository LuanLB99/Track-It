import styled from 'styled-components';
import elipse from './img/Ellipse.png';


export default function BottomBar(){
    return(
    <Footer>
        <div>Habitos</div>
        <Circ>
        <Button><img src={elipse} alt="elipse"/></Button>
            
        </Circ>    
        <div>Histórico</div>     
    </Footer>
    )
}

const Footer = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    position: absolute;
    bottom: 0px;
    display:flex;
    justify-content:space-around;
    align-items: center;
    color:white;

    div{
        display:flex;
        align-items: center;
        justify-content:center;
        margin: 0 auto;
        color:#52B6FF;
    }

`
const Circ = styled.div`
    position: relative;
    bottom: 25px;

    img{
        height:70px;
        width:70px;
    }
`

const Button = styled.div`
    
`