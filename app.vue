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
      title: "Nicolas4dev",
      meta: [
        { property: "og:site_name", content: "nicolas4dev - Personal tech blog" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://nicolas4dev.com",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Nicolas Lima's Software Development Blog",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Articles focused on Technology and Software Development.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "@/assets/images/main.jpeg",
        },
      ],
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