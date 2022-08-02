import styled from 'styled-components';
import Logo from './img/Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Login(){

        const[formLogin, setFormLogin] = useState({});

        function handleForm({name, value}){
            console.log(name,value)
            setFormLogin({
                ...formLogin, 
                [name]:value,
            })
        }

        function sendLogin(){
            console.log(formLogin);
        }

    return(

        

        <>
    <Section>
        <Container>
            <img src={Logo} />
            <Forms>
                <input type="email" placeholder="email" name='email' onChange={(e) => handleForm({
                    name:e.target.name,
                    value:e.target.value,
                })}/>
                <input type="password" placeholder="senha" name='password' onChange={(e) => handleForm({
                    name:e.target.name,
                    value:e.target.value,
                })}/>
                <button onClick={sendLogin}>Entrar</button>
            </Forms>
            <Link to={'/cadastro'}><Sign>Não tem uma conta? Cadastre-se!</Sign></Link>
        </Container>
    </Section>
    </>
    )
}

const Section = styled.div`
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
    background: lightblue;
`

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-itens: center;
    margin: 40px auto;

    img{
        width:125px;
        height:125px;
        margin: 0 auto;
    }
`

const Forms = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itens: center;
    margin-bottom: 10px;
    margin-top: 20px;

    input {
        width: 80%;
        height: 25px;
        margin: 2px auto;
    }

    button {
        width:80%;
        height:25px;
        background:#52B6FF;
        border-radius:4px;
        border: 1px solid #52B6FF;
        color: white;
        margin: 2px auto;
        cursor:pointer;
    }
`

const Sign = styled.div`
    width:80%;
    margin: 0 auto;
    font-size: 10px;
    display:flex;
    justify-content:center;
    text align:center;
`