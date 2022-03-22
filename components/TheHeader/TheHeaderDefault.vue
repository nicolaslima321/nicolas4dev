<template>
  <div class="the-header-mobile">
    <img
      class="index__img"
      height="64px"
      width="64px"
      :src="picture"
    />

    <IconUil:bars style="height: 3em; width: 3em;" @click="sidebarIsActive = !sidebarIsActive"/>

    <!-- teste <IconUil:`${queiconeeesse}` style="height: 3em; width: 3em;"/> testeee -->
    teste
    teste
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import picture from '@/assets/images/main.jpeg';

export default defineComponent({
  name: 'TheHeaderDefault',
  layout: "header",
  setup() {
    const sidebarIsActive = ref(false)
    // const colorMode = useColorMode();

    // console.log(colorMode.preference)
    console.log('hellowww');

    const queiconeeesse = 'IconUil:linkedin'

    return {
      // colorMode,
      sidebarIsActive,
      picture,
      queiconeeesse,
    }
  },
})
</script>


<style lang="scss">
.index__img {
  border-radius: 50%;
}

span {
  color: #FA56BA
}
</style>