import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', () => {
    const info = ref({
        id: 0,
        name: '',
        email: ''
    })

    const login = async function (credentials) {
        let result = 'Непредвиденная ошибка';
        await axios.post('/login', credentials).then(function (response) {
            info.value = response.data.data.user
            result = true
        }).catch(function (error) {
            result = error.response.data.message;
        });

        if (result !== true){
            return Promise.reject(result)
        }

        return result;
    }

    const getInfo = async function () {
        console.log('Getting user info...')
        await axios.get('/user/current').then(function (response) {
            info.value = response.data.data.user
        })
    }

    function logout () {
        // TODO: Метод выхода
    }

    const isAuthenticated = () => {
        console.log('isAuth', info.value.id)
        return Boolean(info.value.id)
    }

    return { info, login, logout, getInfo, isAuthenticated }
})
