import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHabitToday } from "./services/Requests";
import MyHabitToday from "./MyHabitToday";
import dayjs from "dayjs";



export default function Today(){
    const[habitToday, setHabitToday] = useState([]);
    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    

    useEffect(()=> {
        getHabitToday()
        .then((res)=> 
            {console.log(res.data)
            setHabitToday(...habitToday, res.data)
        
        }
        )
        .catch((res)=> console.log(res.data.message))
    },[]);

    return(
    <>
        <TopBar/>
        <Top>
            <div>{semana[dayjs().day()]}, {dayjs().format('DD/MM')}</div>
            {(habitToday.length === 0)?  <Sub>Nenhum Hábito Concluido ainda.</Sub> : <SubC>100% dos hábitos concluídos</SubC> }
            
        </Top>
        <Middle>
        <HabitsOfDay>
        {(habitToday.length === 0)? <Load>'loading...'</Load> : habitToday.map((habit) =><MyHabitToday habit={habit} />)}
        </HabitsOfDay>
        </Middle>
        <BottomBar/>
    </>
    )
}

const Top = styled.div`
    width: 90%;
    margin-top: 50px;
    margin-left: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    div{
        margin-top: 20px;
        font-size: 20px;
        color: #126BA5;
    }


`
const Middle = styled.div`
    max-height: 450px;
`
const HabitsOfDay = styled.div`
    height: 450px;
    overflow-y:scroll;

`

const Load = styled.div`
    margin: 0 auto; 
`
const Sub = styled.h3`
    color:gray;
    font-size:14px;
    height:10px;
`
const SubC = styled.h3`
    color:#8FC549;
    font-size:14px;
    height:10px; 
`
