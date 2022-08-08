import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"


export default function BottomBar(){


    return(
    <Footer>
        <Link to={'/habitos'}><div>Habitos</div></Link>
        <Circ>
        <Link to={'/hoje'}><Button><CircularProgressbar
                    value="67"
                    text="Hoje"
                    maxValue={1}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        height:"40px",
                        width: '40px'
                    })}
                /></Button></Link>    
        </Circ>    
        <Link to={'/historico'}><div>Histórico</div></Link>
    </Footer>
    )
}

const Footer = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 50px;
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
        height:40px;
        width:40px;
    }
`

const Button = styled.div`
    width: 100px;
    height: 40px;
`