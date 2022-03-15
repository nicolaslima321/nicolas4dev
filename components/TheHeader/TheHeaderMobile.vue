<template>
  <div class="the-header">
    <img
      class="index__img"
      height="64px"
      width="64px"
      :src="picture"
    />

    <!-- <div class="app-links"> -->
      <SidebarNav />
    <!-- </div> -->
    <!-- teste <IconUil:`${queiconeeesse}` style="height: 3em; width: 3em;"/> testeee -->
    teste amaterasu
    <component :is="'IconUil:linkedin'"/>
    teste
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
import SidebarNav from '@/components/Tools/SidebarNav.vue';

export default defineComponent({
  components: {
    SidebarNav,
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
.index__img {
  border-radius: 50%;
}

.the-header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: #333;
}

.app-links {
  justify-self: end;
}

@media (max-width: 767px) {
  .the-header {
    padding: 0 16px;
  }
  .the-header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}

@media (min-width: 768px) {
  .the-header {
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
}

span {
  color: #FA56BA
}
</style>