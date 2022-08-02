import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postSign(){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`);
    return promise;
}

function postLogin(){
    const promise = axios.post(`${BASE_URL}/auth/login`);
    return promise;
}

function postHabit(){
    const promise = axios.post(`${BASE_URL}/habits`);
    return promise;
}

function getHabit(){
    const promise = axios.get(`${BASE_URL}/habits`);
    return promise;
}

function getHabitToday(){
    const promise = axios.get(`${BASE_URL}/habits/today`);
    return promise;
}

export { postSign, postLogin , postHabit, postSign, getHabit, getHabitToday}