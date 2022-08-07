import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import styled from "styled-components";
import UserContext from "./AppContext/Context";
import { useContext, useEffect, useState } from "react";
import { getHabitToday } from "./services/Requests";
import MyHabitToday from "./MyHabitToday";
import dayjs from "dayjs";


export default function Today(){
    const[habitToday, setHabitToday] = useState([]);
    
   
    useEffect(()=> {
        getHabitToday()
        .then((res)=> 
            {console.log(res.data)
            setHabitToday(...habitToday, res.data)}
        )
        .catch((res)=> console.log(res.data.message))
    },[]);

    return(
    <>
        <TopBar/>
        <Top>
            <div>Terça, 02/08</div>
            <h3>Nenhum Hábito Concluido ainda.</h3>
        </Top>

        {(habitToday.length === 0)? <Load>'loading...'</Load> : habitToday.map((habit) =>
        <MyHabitToday habit={habit}/>
        )}
        <BottomBar/>
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

const Load = styled.div`
    margin: 0 auto; 
`
