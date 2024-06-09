<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <form action="#">
        <h2 class="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white">Основная информация</h2>
        <div class="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
          <div class="sm:col-span-2 disabled">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Загрузить аватар</label>
            <div class="items-center w-full sm:flex">
              <img class="w-20 h-20 mb-4 rounded-full sm:mr-4 sm:mb-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar">
              <div class="w-full">
                <input disabled="true" class="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
              </div>
            </div>
          </div>
          <div>
            <text-field name="name" label="Имя"></text-field>
          </div>
          <div>
            <text-field name="email" label="email"></text-field>
          </div>
          <div>
            <text-field name="password" label="Пароль"></text-field>
          </div>
          <div>
            <text-field name="password-confirmation" label="Подтверждение пароля"></text-field>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import TextField from "@/components/forms/TextField.vue";
</script>