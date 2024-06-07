<template>
  <div>
    <label v-if="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           :type="type ?? 'text'" :name="name" :placeholder="placeholder" :required="required" @change="handleChange" />
    <p class="mt-2 text-xs text-red-600 dark:text-red-400">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps([
  'modelvalue',
  'label',
  'name',
  'type',
  'placeholder',
  'required'
])

const { handleChange, value, handleBlur, errorMessage, meta } = useField(() => props.name, undefined);

// defineEmits(["update:modelValue"]);
</script>