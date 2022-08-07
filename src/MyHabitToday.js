import { useState } from "react";
import styled from "styled-components"
import certo from "./img/certo.png";
import { checkHabit, uncheckHabit } from "./services/Requests";



export default function MyHabitToday({habit}){
    const[isDone, setIsDone] = useState(false);

    function isDoneHabit(){
        if(habit.done){
          console.log('habilitado')
        } else{
            console.log(habit.id)
            checkHabit(habit.id)
            .then(() => console.log('deu certo!'))
            .catch(() => console.log('deu errado'))
        }
    }

    return(
        <MyHabit>
            <SingleHabit>
                <div>{habit.name}</div>  
                <h3>Sequência atual:{habit.currentSequence} dias</h3>
                <h3>Seu recorde:{habit.highestSequence} dias</h3>      
            </SingleHabit>
            <Correct color={(habit.done)? 'green':'gray'} onClick={isDoneHabit}>
                <img src={certo}></img>
            </Correct>
        </MyHabit>
      
    )
}

const MyHabit = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 90px;
    margin: 0 auto;
    padding: 15px;
    background: lightgreen;
    display: flex;
    justify-content:space-between;
    align-items:center;
`

const SingleHabit = styled.div`
    width: 100%;
    height: 100%;

    div{
        font-size: 15px;
    }

    h3{
        height:10px;
        width:100%;
        font-size: 10px;

    }
`

const Correct = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.color};
    border-radius:5px;
    height: 90%;
    width: 70px;

`