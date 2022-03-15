<template>
  <div>
    <img
      class="index__img"
      height="64px"
      width="64px"
      :src="picture"
    />
    teste <IconUil:linkedin /> testeee
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

export default defineComponent({
  setup() {
    console.log('hellowww');

    return {
      picture
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