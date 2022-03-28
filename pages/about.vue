<template>
  <div>
    <NuxtLayout name="header"/>

    <div class="contact">
      <h1 class="contact__title">Hey! You can <strong class="contact__text-gradient">reach me out</strong> at:</h1>

      <section class="contact__section">
        <nuxt-link class="contact__section-item" to="https://www.linkedin.com/in/nicolas-lima-98a0a1131/">
          <h1 class="contact__title"><strong class="contact__text-gradient">LinkedIn</strong></h1>
          <IconUil:linkedin class="contact__section-icon"/>
        </nuxt-link>

        <nuxt-link class="contact__section-item" to="https://www.linkedin.com/in/nicolas-lima-98a0a1131/">
          <h1 class="contact__title"><strong class="contact__text-gradient">GitHub</strong></h1>
          <IconUil:github class="contact__section-icon"/>
        </nuxt-link>

        <nuxt-link class="contact__section-item" to="https://www.linkedin.com/in/nicolas-lima-98a0a1131/">
          <h1 class="contact__title"><strong class="contact__text-gradient">Laboratory</strong></h1>
          <IconUil:github class="contact__section-icon"/>
        </nuxt-link>

        <nuxt-link class="contact__section-item" to="https://www.linkedin.com/in/nicolas-lima-98a0a1131/">
          <h1 class="contact__title"><strong class="contact__text-gradient">DevTo</strong></h1>
          <IconMdi:dev-to class="contact__section-icon"/>
        </nuxt-link>

        <nuxt-link class="contact__section-item" to="https://www.linkedin.com/in/nicolas-lima-98a0a1131/">
          <h1 class="contact__title"><strong class="contact__text-gradient">Instagram</strong></h1>
          <IconUil:instagram class="contact__section-icon"/>
        </nuxt-link>
      </section>

    </div>

    <NuxtLayout name="footer"/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Contact',
})
</script>

<style lang="scss">
.contact {
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

.contact__title {
  font-size: $font-size-h3;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h1;
  }
}

.contact__section {
  align-items: flex-start;
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  @media(min-width: $screen-desktop) {
    align-items: center;
    align-content: center;
    flex-direction: row;
    margin: $space-lg 0;
  }
}

.contact__section-item {
  align-items: center;
  display: flex;
}

.contact__section-icon {
  margin-left: $space-m;
  height: 48px;
  width: 48px;
}

.contact__greeting {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: $space-lg;
}

.contact__subtitle {
  font-size: $font-size-h4;
  text-align: justify;
  text-align-last: center;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h2;
  }
}

.contact__text-gradient {
  background: #707876;
  background: -webkit-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: -moz-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: linear-gradient(to right, #707876 0%, #153D40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>