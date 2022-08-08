import { useState } from "react";
import styled from "styled-components"
import certo from "./img/certo.png";
import { checkHabit, uncheckHabit } from "./services/Requests";



export default function MyHabitToday({habit, concludes, setConcludes}){
    const[isDone, setIsDone] = useState(habit.done);

    function removeValues(arr,day){
        return arr.filter((i) => i != day)
    }
    


    function isDoneHabit(){
        if(habit.done){
          uncheckHabit(habit.id)
          .then()
          .catch((res) => console.log(res.data))
          setIsDone(!isDone);
          setConcludes(removeValues(concludes,habit.id))
        } else{
            checkHabit(habit.id)
            .then()
            .catch()
            setIsDone(!isDone)
            concludes.push(habit.id)
        }
    }

    return(
        <MyHabit>
            <SingleHabit>
                <div>{habit.name}</div>  

                {(habit.currentSequence === habit.highestSequence) ? <><Sequencia>Sequência atual:{habit.currentSequence} dias</Sequencia>
                <Sequencia>Seu recorde:{habit.highestSequence} dias</Sequencia> </>: <><SequenciaIn>Sequência atual:{habit.currentSequence} dias</SequenciaIn>
                <SequenciaIn>Seu recorde:{habit.highestSequence} dias</SequenciaIn></> }
                    
            </SingleHabit>
            {(isDone)? <Correct color='green' onClick={isDoneHabit}>
                <img src={certo}></img>
            </Correct> :  <Correct color='gray' onClick={isDoneHabit}>
                <img src={certo}></img>
            </Correct> }
        </MyHabit>
      
    )
}

const MyHabit = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 90px;
    margin: 10px auto;
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

const Sequencia = styled.h3`

    height:10px;
    width:100%;
    font-size: 10px;
    color: green;

`

const SequenciaIn = styled.h3`

    height:10px;
    width:100%;
    font-size: 10px;
    color: black;

`