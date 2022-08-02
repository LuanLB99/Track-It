import { useState } from "react";
import styled from "styled-components";
import plus from './img/+.png';
import Habit from './Habit';

export default function Habits(){
    const [newHabit, setNewHabit] = useState(false);

    return(
        <>
        <Top>
            <div>Meus Hábitos</div>
            <Plus onClick={() => setNewHabit(!newHabit)}><img src={plus} alt="setinha"/></Plus>
        </Top>
        {(newHabit)? 
            <Habit setNewHabit={setNewHabit}/> : ''  
    }
        <div>
            Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!
        </div>

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

const Plus = styled.div`
   
    width:40px;
    height:35px;
    border-radius: 4px;
    background: #52B6FF;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`

