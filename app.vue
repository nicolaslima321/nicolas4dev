<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap');

html {
  font-family: 'Fredoka', sans-serif;
}
</style>