
<script setup>
import { useRoute } from 'vue-router';
  const nuxt = useNuxtApp();
  console.log(nuxt);
</script>

<template>
  <div>even name:{{ $route.params.name }}</div>
</template>