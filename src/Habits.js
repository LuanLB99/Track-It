import { useEffect, useState } from "react";
import styled from "styled-components";
import plus from './img/+.png';
import Habit from './Habit';
import { getHabit } from "./services/Requests";
import MyHabits from "./MyHabits";

export default function Habits(){
    const [newHabit, setNewHabit] = useState(false);
    const [listHabit, setListHabit] = useState([]);

    useEffect(()=> {
        getHabit().then(res => setListHabit(...listHabit,res.data))
    },[])

    return(
        <>
        <Top>
            <div>Meus Hábitos</div>
            <Plus onClick={() => setNewHabit(!newHabit)}><img src={plus} alt="setinha"/></Plus>
        </Top>
        
        {(newHabit)? <Habit setNewHabit={setNewHabit}/> : '' }
        
        <Content> 
        {(listHabit.length === 0) ? <NoHabits>
                                        Você não tem nenhum hábito cadastrado ainda. 
                                        Adicione um hábito para começar a trackear!
                                    </NoHabits>
        
        : listHabit.map((myHabit) => <MyHabits myHabit={myHabit}/>)}
        
        </Content>
       
        </>
    )
}

const Top = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom:5px;
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

const NoHabits = styled.div`
    width: 90%;
    margin: 0 auto;
`

const Content = styled.div`
    height: 450px;
    overflow-y:scroll;
`
const Middle = styled.div`
    max-height: 450px;
`


