import styled from "styled-components";

export default function Habit({setNewHabit}){
    return(
        <Form>
            <input placeholder="nome do hábito" type='text' name="habito" />
            <Inputs>
            <DayInput value="S" type='text' name="segunda" />
            <DayInput value="T" type='text' name="terça"  />
            <DayInput value="Q" type='text' name="quarta"  />
            <DayInput value="Q" type='text' name="quinta"  />
            <DayInput value="S" type='text' name="sexta"  />
            <DayInput value="S" type='text' name="sabado"  />
            <DayInput value="D" type='text' name="domingo"  />
            </Inputs>
                <Buttons>
                <CancelButton onClick={() => setNewHabit(false)}>Cancelar</CancelButton>
                <SendButton>Salvar</SendButton>
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