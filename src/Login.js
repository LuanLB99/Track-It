import styled from 'styled-components';
import Logo from './img/Logo.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { postLogin } from './services/Requests';
import { useNavigate } from 'react-router-dom';
import UserContext from './AppContext/Context';
import { ThreeDots } from 'react-loader-spinner';


export default function Login(){

    const navigate = useNavigate();
    const {user,setUser,} = useContext(UserContext);
    const [sending, setSending] = useState(true);

        const[formLogin, setFormLogin] = useState({});

        function handleForm({name, value}){
            setFormLogin({
                ...formLogin, 
                [name]:value,
            })
        }

        function sendLogin(e){
            e.preventDefault();
            postLogin(formLogin).then((res)=> {
                setSending(false)
                setUser(res.data);
                navigate('/hoje', {state: res.data.token})
                localStorage.setItem('token',JSON.stringify(res.data.token))
                localStorage.setItem('image', JSON.stringify(res.data.image))
            })
            .catch((response)=> {alert(response)
            setSending(true)
            });

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
                {(sending) ? <button onClick={sendLogin}>Entrar</button> : <Dots><ThreeDots color="white" height={40} width={40}/></Dots>}
            </Forms>
            <Link to={'/cadastro'}><SwitchToSign>Não tem uma conta? Cadastre-se!</SwitchToSign></Link>
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
    height:30%;

    input {
        border: 1px solid #D4D4D4;
        height: 45px;
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

const SwitchToSign = styled.div`
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
