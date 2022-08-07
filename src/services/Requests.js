import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function authentic (){
    const auth = JSON.parse(localStorage.getItem('token'));
    const config = {
     headers:   {
        Authorization: `Bearer ${auth}`
    }
  };

  return config;
}
  

function postSign(sign){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, sign);
    return promise;
}

function postLogin(login){
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
}

function postHabit(newHabit){
    const config = authentic();
    const promise = axios.post(`${BASE_URL}/habits`, newHabit, config);
    return promise;
}

function getHabit(){
    const config = authentic();
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function getHabitToday(){
    const config = authentic();
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function deleteHabit(idHabit){
    const config = authentic();
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`, config)
    return promise;
}

function checkHabit(idHabit){
    const config = authentic();
    const promise = axios.post(`${BASE_URL}/habits/${idHabit}/check`,{}, config);
    return promise;
}

function uncheckHabit(idHabit){
    const config = authentic();
    const promise = axios.post(`${BASE_URL}//habits/${idHabit}/uncheck`,{}, config);
    return promise;
}

export { postSign, postLogin , postHabit, getHabit, getHabitToday, deleteHabit, checkHabit, uncheckHabit}