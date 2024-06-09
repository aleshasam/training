import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', () => {
    const info = ref({
        name: '',
        email: ''
    })

    const login = async function (credentials) {
        let result = 'Непредвиденная ошибка';
        await axios.post('/login', credentials).then(function (response) {
            result = true
        }).catch(function (error) {
            result = error.response.data.message;
        });

        if (result !== true){
            return Promise.reject(result)
        }

        return result;
    }

    function logout () {
        // TODO: Метод выхода
    }

    return { info, login, logout }
})
