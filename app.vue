<template>
  <!-- <div> -->
    <!-- <NuxtLayout> -->
      <NuxtPage />
    <!-- </NuxtLayout> -->
  <!-- </div> -->
</template>

<script>
export default {
  setup() {
    const colorMode = useColorMode();

    return { colorMode }
  },
  head() {
    return {
      title: "Nicolas4dev"
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap');

html {
  font-family: 'Fredoka', sans-serif;
}
</style>