<template>
  <div>
    <p>{{ isLoading ? 'Loading' : user}}</p>
  </div>
</template>

<script setup>
const isLoading = ref(true);
  const {data:user} = await useLazyFetch('/api/lazyuser',{
  })
  console.log(toRaw(user.value))
  watchEffect(() => {
  if (user.value) {
    isLoading.value = false;
  }
});
</script>
