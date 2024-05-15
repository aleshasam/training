<template>
  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    Создать аккаунт
  </h1>
  <form class="space-y-4 md:space-y-6" action="#">
    <TextField v-model="formData.email" :type="'email'" :placeholder="'name@company.com'" :label="'Ваш email'" :required="true"></TextField>
    <TextField v-model="formData.password" :type="'password'" :placeholder="'••••••••'" :label="'Пароль'" :required="true"></TextField>
    <TextField v-model="formData.confirmPassword" :type="'confirm-password'" :placeholder="'••••••••'" :label="'Подтвердите пароль'" :required="true"></TextField>

    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input id="terms" aria-describedby="terms" type="checkbox"
               class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
               required="">
      </div>
      <div class="ml-3 text-sm">
        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
            class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and
          Conditions</a></label>
      </div>
    </div>
    <button type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      Создать аккаунт
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Уже есть аккаунт? <router-link :to="{name: 'Login'}" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Войти</router-link>
    </p>
  </form>
</template>

<script setup>
import TextField from "@/components/forms/TextField.vue";
import {ref} from "vue";

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
})

</script>