import { useEffect, useState } from "react";
import styled from "styled-components";
import { postHabit } from "./services/Requests";


export default function Habit({setNewHabit}){

    const [days, setDays] = useState([]);
    const [habit, setHabit] = useState();
    const [formHabit, setFormHabit] = useState({});

function removeValues(arr,day){
    return arr.filter((i) => i != day)
}

function myvalues(i){
    const convert = parseInt(i);
    if(!days.includes(convert)){
        days.push(convert)
        
    } else {
        setDays(removeValues(days, convert));
    }

    
}


function postingHabit(){
    const body = {
        name:habit,
        days:days,
    }
        postHabit(body)
        .then((res)=> console.log(res.data))
        .catch((res)=> (console.log(res.data.message)))
   
    
}


    return(
        <Form>
            <input placeholder="nome do hábito" type='text' name="habito" onChange={(e) => setHabit(e.target.value)}/>
            <Inputs>
            <DayInput value="S" type='text' name='1' onClick={(e => myvalues((e.target.name)))} />
            <DayInput value="T" type='text' name="2" onClick={(e => myvalues(e.target.name))} />
            <DayInput value="Q" type='text' name="3" onClick={(e => myvalues(e.target.name))} />
            <DayInput value="Q" type='text' name="4" onClick={(e => myvalues(e.target.name))} />
            <DayInput value="S" type='text' name="5" onClick={(e => myvalues(e.target.name))}/>
            <DayInput value="S" type='text' name="6" onClick={(e => myvalues(e.target.name))}/>
            <DayInput value="D" type='text' name="7" onClick={(e => myvalues(e.target.name))}/>
            </Inputs>
                <Buttons>
                <CancelButton onClick={() => setNewHabit(false)}>Cancelar</CancelButton>
                <SendButton onClick={postingHabit}>Salvar</SendButton>
                </Buttons>
        </Form>
    )
}

const Form = styled.div`
    margin: 0 auto;
    background: lightgreen;
    width:90%;
    height:120px;
    border-radius:5px;
    display:flex;
    flex-direction: column;
`

const DayInput = styled.input`
    width: 30px;
    height:30px;
    border: 1px solid #D4D4D4;
    border-radius: 2px;
    text-align: center;
    color:#D4D4D4;

    
`

const Inputs = styled.div`
    margin-top: 10px;

    input {
        margin-right: 5px;
    }
`

const SendButton = styled.div`
    height:35px;
    width: 80px;
    background:#52B6FF;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    boder-radius:4px;
`
const CancelButton = styled.div`
    height:35px;
    width: 80px;
    color:#52B6FF;
    background: white;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Buttons = styled.div`
    height: 60px;
    width:95%;
    display:flex;
    justify-content:flex-end;
    align-items: center;

`