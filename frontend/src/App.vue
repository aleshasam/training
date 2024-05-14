<template>
  <component :is="layout"/>
</template>

<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router'
import Internal from "./views/layouts/Internal.vue";
import External from "./views/layouts/External.vue";
import Default from "./views/layouts/Default.vue";

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const route = useRoute();

const layout = computed(() => {
  console.log('route', route?.meta.layout)
  switch (route?.meta.layout) {
    case 'external':
      return External;
    case 'internal':
      return Internal;
    default:
      return Default;
  }
});

onMounted(() => {
  initFlowbite();
})
</script>