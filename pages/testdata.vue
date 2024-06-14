<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
  const {data} = await useFetch('/api/user',{
    transform: (ref) => ref.data,
  })
  console.log(toRaw(data.value))
</script>
