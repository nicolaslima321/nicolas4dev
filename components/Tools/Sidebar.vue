<template>
  <ul class="side-bar">
    <li class="side-bar__item"><nuxt-link to="/about">About</nuxt-link></li>
    <li class="side-bar__item"><nuxt-link to="/services">Services</nuxt-link></li>
    <li class="side-bar__item"><nuxt-link to="/contact">Contact</nuxt-link></li>
  </ul>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    console.log('hellowww');

    return {};
  },
})
</script>

<style lang="scss">
.side-bar {
  list-style: none;
  padding: 0;
  margin: 0;
}
.side-bar__item {
  margin: 0 10px;
}
.side-bar__item a {
  text-decoration: none;
  color: #fefefe;
}
.side-bar__item a:hover,
.side-bar__item a:active{
  color: #b4b4b4;
}

@media (max-width: 767px) {
  .side-bar {
    display: block;
  }
  .side-bar__item{
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
@media (min-width: 768px) {
  .side-bar {
    display: flex;
  }
}
</style>