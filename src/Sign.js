import styled from 'styled-components';
import Logo from './img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postSign } from './services/Requests';
import { ThreeDots } from "react-loader-spinner";

export default function Sign(){
    const [formSign, setFormSign] = useState({});
    const [sending, setSending] = useState(true);
   const navigate = useNavigate();

    function mergeform({name, value}) {
        setFormSign({
            ...formSign, 
            [name]: value,
        })
    }

    function sendFormSign(e){
        e.preventDefault();
        postSign(formSign).then((res) => navigate('/'))
        .catch((res) => alert(res.data))

    }

    return(
        <>
    <Section>
        <Container>
            <img src={Logo} />
            <Forms>
                <input type="email" placeholder="email" name='email' onChange={(e) => mergeform ({
                    name: e.target.name,
                    value:e.target.value
                })} />
                <input type="password" placeholder="senha" name='password' onChange={(e) => mergeform ({
                    name: e.target.name,
                    value:e.target.value
                })}/>
                <input type="text" placeholder="nome" name='name' onChange={(e) => mergeform ({
                    name: e.target.name,
                    value:e.target.value
                })}/>
                <input type="url" placeholder="foto" name='image' onChange={(e) => mergeform ({
                    name: e.target.name,
                    value:e.target.value
                })}/>
                {(sending)? <button onClick={sendFormSign}>Cadastrar</button> : <Dots><ThreeDots color="white" height={40} width={40}/></Dots>}
            </Forms>
            <Link to={'/'}><SwitchToLogin>Já tem uma conta? Faça login!</SwitchToLogin></Link>
        </Container>
    </Section>
    </>
    )
}

const Section = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
    background: white;
`

const Container = styled.div`
    display: flex;
    height: 80%;
    width: 100%;
    flex-direction:column;
    justify-content: center;
    align-itens: center;
    margin: 40px auto;

    img{
        width:150px;
        height:150px;
        margin: 5px auto;
    }
`

const Forms = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itens: center;
    margin-bottom: 5px;
    height:50%;

    input {
        border: 1px solid #D4D4D4;
        height: 40px;
        width: 250px;
        margin: 2px auto;
        border-radius: 5px;
    }

    button {
        width:255px;
        height:45px;
        background:#52B6FF;
        border-radius:4px;
        border: 1px solid #52B6FF;
        color: white;
        cursor:pointer;
        font-size: 15px;
        font-weight: 400;
        font-style: Lexend Deca;
        margin: 5px auto;
    }
`

const SwitchToLogin = styled.div`
        width:80%;
        height: 20px;
        margin: 0 auto;
        font-size: 15px;
        color: #52B6FF;
        display:flex;
        justify-content:center;
        text align:center;
`

const Dots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        width:80%;
        height:25px;
        background:#52B6FF;
        border-radius:4px;
        border: 1px solid #52B6FF;
        color: white;
        margin: 5px auto;
        cursor:pointer;
`