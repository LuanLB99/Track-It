import { useState } from "react";
import styled from "styled-components"
import lixeira from './img/lixeira.png'
import { deleteHabit } from "./services/Requests";

export default function MyHabits({myHabit}){
    const [render, setRender] = useState({});
    
function deleting(){
        if(window.confirm('Você têm certeza?')){
            setRender(myHabit)
        deleteHabit(myHabit.id)
        .then((res) => console.log(res.data))
        .catch((res) => console.log(res.data.message))
        };
}
   

    return (
        <><Form>
        <FormHeader>
            <HabitTable>{myHabit.name}</HabitTable>
            <img src={lixeira} onClick={deleting}/>
        </FormHeader>
        <Inputs>
        <DayInput readOnly value="S" type='text' name='1' 
            background={(myHabit.days.includes(1))?'#CFCFCF':'white'} 
            color={(myHabit.days.includes(1))?"white":"#D4D4D4"}
        />

        <DayInput readOnly  value="T" type='text' name="2" 
        background={(myHabit.days.includes(2))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(2))?"white":"#D4D4D4"}
        />

        <DayInput readOnly  value="Q" type='text' name="3" 
        background={(myHabit.days.includes(3))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(3))?"white":"#D4D4D4"}
        />

        <DayInput readOnly value="Q" type='text' name="4" 
        background={(myHabit.days.includes(4))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(4))?"white":"#D4D4D4"}
        />

        <DayInput readOnly value="S" type='text' name="5" 
        background={(myHabit.days.includes(5))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(5))?"white":"#D4D4D4"}
        />

        <DayInput readOnly value="S" type='text' name="6" 
        background={(myHabit.days.includes(6))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(6))?"white":"#D4D4D4"}
        />

        <DayInput readOnly value="D" type='text' name="7" 
        background={(myHabit.days.includes(7))?'#CFCFCF':'white'} 
        color={(myHabit.days.includes(6))?"white":"#D4D4D4"}
        />
        </Inputs>
        </Form>
        </>
    )
}

const Inputs = styled.div`
    margin: 0 auto;
    margin-top: 10px;

    input {
        margin-right: 5px;
    }
`
const Form = styled.div`
    margin: 10px auto;
    background: white;
    width:90%;  
    height:120px;
    border-radius:5px;
    display:flex;
    flex-direction: column;


    
`

const FormHeader = styled.div`
    width:90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;

    img{
        width: 12px;
        height:12px;
    }
`

const DayInput = styled.input`
    width: 30px;
    height:30px;
    border: 1px solid #D4D4D4;
    border-radius: 2px;
    text-align: center;
    color:${(props) => props.color};
    background:${(props) => props.background};   
`
const HabitTable = styled.div`
    margin: 0 auto;
    display:flex;
    align-items:center;
    height: 30px;
    width:90%;
    background: white;
    border-radius: 2px;
    border: 1px solid #D4D4D4;

`




