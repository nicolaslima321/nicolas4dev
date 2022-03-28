<template>
  <div>
    <NuxtLayout name="header"/>

    <div class="articles">
      <!-- TODO: Create Card Component and request Back-end to display saved articles -->

    </div>

    <NuxtLayout name="footer"/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Articles',
  head() {
    return {
      title: "Nicolas4dev - Articles"
    };
  },
})
</script>

<style lang="scss">
.articles {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (2.5 * $header-height));
  justify-content: center;
  min-width: 100vw;
  padding: $space-s $space-m;
  text-align: left;

  @media(min-width: $screen-desktop) {
    padding: $space-xl;
  }
}

.articles__title {
  font-size: $font-size-h3;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h1;
  }
}

.articles__text-gradient {
  background: #707876;
  background: -webkit-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: -moz-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: linear-gradient(to right, #707876 0%, #153D40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>