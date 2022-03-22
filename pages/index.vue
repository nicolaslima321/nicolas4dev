<template>
  <div>
    <NuxtLayout name="header"/>

    The rest of the page
    sua mae de 45a n
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import picture from '@/assets/images/main.jpeg';
import TheHeaderDefault from '~~/components/TheHeader/TheHeaderDefault.vue';
import TheHeaderMobile from '~~/components/TheHeader/TheHeaderMobile.vue';

export default defineComponent({
  components: {
    TheHeaderDefault,
    TheHeaderMobile,
  },
  setup() {
    console.log('hellowww');
    const queiconeeesse = 'IconUil:linkedin'

    return {
      picture,
      queiconeeesse,
    }
  },
})
</script>


<style lang="scss">
.index {
  color: black;
}

span {
  color: #FA56BA
}
</style>