<template>
  <div>
    Custom page
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const {sayHello} = useUtilss();
sayHello();
</script>
