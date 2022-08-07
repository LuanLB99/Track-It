import { Link } from 'react-router-dom';
import styled from 'styled-components';
import elipse from './img/Ellipse.png';



export default function BottomBar(){
    return(
    <Footer>
        <Link to={'/habitos'}><div>Habitos</div></Link>
        <Circ>
        <Link to={'/hoje'}><Button><img src={elipse} alt="elipse"/></Button></Link>    
        </Circ>    
        <Link to={'/historico'}><div>Histórico</div></Link>
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
    justify-content:center;
    align-items: center;
    color:white;

    div{
        display:flex;
        align-items: center;
        justify-content:center;
        margin: 0 auto;
        color:#52B6FF;
    }

    a{
        text-decoration: initial;

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
    width: 100%;
`