<template>
  <div>
    <NuxtLayout name="header"/>

    <div class="index">
      <div class="index__main-section">
        <h1 class="index__title">Welcome to <strong class="index__text-gradient">Nicolas Lima</strong> development blog! 🚀</h1>
      </div>

      <div class="index__main-section">
        <h2 class="index__day_phrase">Day Phrase: <strong class="index__text-gradient">{{ dayPhrase }}</strong></h2>
      </div>

      <h2 class="index__subtitle">
        You problaby will know me as
        <strong class="index__text-gradient">@nicolaslima321</strong> ||
        <strong class="index__text-gradient"> @nicolas4dev </strong> ||
        just by <strong class="index__text-gradient"> Nicolas Lima.</strong> I'm a Software Engineer
        with emphasis acting as <strong class="index__text-gradient">Full-Stack</strong> development,
        in love about booth <strong class="index__text-gradient">Back-End</strong> and <strong class="index__text-gradient">Front-End</strong>.
        <strong class="index__text-gradient">Linux</strong> and <strong class="index__text-gradient">JavaScript</strong> lover.
        I appreciate a lot, to help and engage with the community of Software Development.
      </h2>
    </div>

    <NuxtLayout name="footer"/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Index',
  setup() {
    const dayPhrase = 'Never deploy on a friday!';

    return { dayPhrase }
  },
  head() {
    return {
      title: "Nicolas4dev - Home"
    };
  },
})
</script>

<style lang="scss">
.index {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - (2.5 * $header-height));
  justify-content: center;
  max-width: 100%;
  padding: $space-s $space-m;
  text-align: center;

  @media(min-width: $screen-desktop) {
    padding: $space-xl;
  }
}

.index__title {
  font-size: $font-size-h3;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h1;
  }
}

.index__main-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: $space-lg;
}

.index__day_phrase {
  font-size: $font-size-h4;
  text-align-last: center;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h2;
  }
}

.index__subtitle {
  font-size: $font-size-h4;
  text-align: justify;
  text-align-last: center;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h2;
  }
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