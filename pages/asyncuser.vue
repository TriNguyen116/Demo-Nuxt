<template>
  <div>
    <p>{{ pending ? 'Loading' : userCount}}</p>
    <button @click="refresh">refresh</button>
  </div>
</template>

<script setup>
  
const {data:userCount,pending} = await useAsyncData('asyncuser',()=> $fetch("/api/asyncuser"))
  console.log(toRaw(userCount.value))
  const refresh = () => refreshNuxtData("asyncuser")
  
  
</script>
