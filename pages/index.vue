<template>
  <div>index page</div>
  {{ $hello('worldsssss') }}
  <ContentDoc />
</template>

<script setup lang="ts">
  // const {sayHello} = useUtilss();
  // sayHello();
  // const { $hello } = useNuxtApp()
  const respone = await $fetch('/api/hello')
  console.log(respone);
  

</script>