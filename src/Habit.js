import { useEffect, useState } from "react";
import styled from "styled-components";
import { postHabit } from "./services/Requests";


export default function Habit({setNewHabit}){

    const [days, setDays] = useState([]);
    const [habit, setHabit] = useState();
    const [click, setClick] = useState(true);

function removeValues(arr,day){
    return arr.filter((i) => i != day)
}

function myvalues(i){
    setClick(!click);
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
            <TextInput placeholder="nome do hábito" type='text' name="habito" onChange={(e) => setHabit(e.target.value)}/>
            <Inputs>
            {(click) ?<> <DayInput value="S" type='text' name='1' onClick={(e => myvalues((e.target.name)))} readOnly color={(days.includes(1))?"white":"#D4D4D4"} background={(days.includes(1))?"#D4D4D4":"white"}/>
            <DayInput value="T" type='text' name="2" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(2))?"white":"#D4D4D4"} background={(days.includes(2))?"#D4D4D4":"white"}/>
            <DayInput value="Q" type='text' name="3" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(3))?"white":"#D4D4D4"} background={(days.includes(3))?"#D4D4D4":"white"}/>
            <DayInput value="Q" type='text' name="4" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(4))?"white":"#D4D4D4"} background={(days.includes(4))?"#D4D4D4":"white"}/>
            <DayInput value="S" type='text' name="5" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(5))?"white":"#D4D4D4"} background={(days.includes(5))?"#D4D4D4":"white"}/>
            <DayInput value="S" type='text' name="6" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(6))?"white":"#D4D4D4"} background={(days.includes(6))?"#D4D4D4":"white"}/>
            <DayInput value="D" type='text' name="7" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(7))?"white":"#D4D4D4"} background={(days.includes(7))?"#D4D4D4":"white"}/> </>: <><DayInput value="S" type='text' name='1' onClick={(e => myvalues((e.target.name)))} readOnly color={(days.includes(1))?"white":"#D4D4D4"} background={(days.includes(1))?"#D4D4D4":"white"}/>
            <DayInput value="T" type='text' name="2" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(2))?"white":"#D4D4D4"} background={(days.includes(2))?"#D4D4D4":"white"}/>
            <DayInput value="Q" type='text' name="3" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(3))?"white":"#D4D4D4"} background={(days.includes(3))?"#D4D4D4":"white"}/>
            <DayInput value="Q" type='text' name="4" onClick={(e => myvalues(e.target.name))} readOnly color={(days.includes(4))?"white":"#D4D4D4"} background={(days.includes(4))?"#D4D4D4":"white"}/>
            <DayInput value="S" type='text' name="5" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(5))?"white":"#D4D4D4"} background={(days.includes(5))?"#D4D4D4":"white"}/>
            <DayInput value="S" type='text' name="6" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(6))?"white":"#D4D4D4"} background={(days.includes(6))?"#D4D4D4":"white"}/>
            <DayInput value="D" type='text' name="7" onClick={(e => myvalues(e.target.name))}readOnly color={(days.includes(7))?"white":"#D4D4D4"} background={(days.includes(7))?"#D4D4D4":"white"}/></>}
            
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
    background: white;
    width:90%;
    height:120px;
    border-radius:5px;
    display:flex;
    flex-direction: column;
    
`
const TextInput = styled.input`
    margin: 0 auto;
    margin-top:10px;
    width:90%;
    height:30px;
    border: 1px solid #D4D4D4;

`

const DayInput = styled.input`
    width: 30px;
    height:30px;
    border: 1px solid #D4D4D4;
    border-radius: 2px;
    text-align: center;
    color:${(props)=> props.color};
    background:${(props)=> props.background};
    
`

const Inputs = styled.div`
    margin: 0 auto;
    margin-top: 10px;

    input {
        margin-right: 5px;
    }
`

const SendButton = styled.div`
    height:30px;
    width: 80px;
    background:#52B6FF;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:4px;
`
const CancelButton = styled.div`
    height:30px;
    width: 80px;
    color:#52B6FF;
    background: white;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Buttons = styled.div`
    margin-top: 10px;
    height: 60px;
    width:95%;
    display:flex;
    justify-content:flex-end;
    align-items: center;

`