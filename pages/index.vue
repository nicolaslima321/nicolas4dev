<template>
  <div>
    <NuxtLayout name="header"/>

    <div class="index">
      <div class="index__greeting">
        <h1 class="index__title">Welcome to <strong class="index__text-gradient">Nicolas Lima</strong> development blog! :D</h1>
      </div>

      <h2 class="index__greeting-complementary">
        You probably know me from
        <strong class="index__text-gradient">@nicolaslima321</strong> ||
        <strong class="index__text-gradient"> @nicolas4dev </strong> ||
        just by <strong class="index__text-gradient"> Nicolas Lima </strong>
      </h2>
    </div>

    <NuxtLayout name="footer"/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import picture from '@/assets/images/main.jpeg';

export default defineComponent({
  setup() {
    return {
      picture,
    }
  },
})
</script>


<style lang="scss">
.index {
  // align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (2 * $header-height));
  justify-content: center;
  min-width: 100vw;
  padding: $space-s $space-m;
  text-align: center;

  @media(min-width: $screen-desktop) {
    padding: $space-lg;
  }
}

.index__title {
  font-size: $font-size-h2;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h1;
  }
}

.index__greeting {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: $space-lg;

  // @media(min-width: $screen-desktop) {
  //   margin-bottom: $space-lg;
  // }
}

.index__greeting-complementary {
  text-align: center;

  // @media(min-width: $screen-desktop) {
  //   text-align: center;
  // }
}

.index__text-gradient {
  background: #707876;
  background: -webkit-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: -moz-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: linear-gradient(to right, #707876 0%, #153D40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>