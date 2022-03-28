<template>
  <div>
    <NuxtLayout name="header"/>

    <div class="about">
      <img
        class="about__image"
        height="128px"
        width="128px"
        :alt="'nicolas'"
        :src="picture"
      />

      <section class="about__section">
        <h1 class="about__title about__text-gradient">nicolas@host:~$ whoami?</h1>

        <div class="about__text">
          <p>My history with programming started at 2014. Since then, I got a passionate for software development, and engineering.</p>
          <p>
            I'm currently learning and having fun with Front-end and Back-end, my prefered stacks are VueJS, TypeScript, JavaScript, PHP and Elixir.
            But I also know something about React, and some others :P
          </p>
          <p>
            When I started my carrer I got very difficult to learn and practice my skills, new technologies, or improve the knowed ones.
            So after some years of experience, I decided to create a public profile to help community, just like the help I wanted to some past years ago.
          </p>
        </div>
      </section>

    </div>

    <NuxtLayout name="footer"/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import picture from '@/assets/images/nicolas4dev.png';

export default defineComponent({
  name: 'About',
  setup() {
    return {
      picture,
    };
  },
  head() {
    return {
      title: "Nicolas4dev - About Me"
    };
  },
})
</script>

<style lang="scss">
.about {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (2.5 * $header-height));
  min-width: 100vw;
  padding: $space-lg $space-m;
  text-align: justify;
  text-align-last: left;

  @media(min-width: $screen-desktop) {
    padding: $space-xl;
  }
}

.about__image {
  border-radius: 50%;
	height: 128px;
  margin-bottom: $space-s;
	opacity: 85%;
	width: 128px;
  z-index: -1;

  @media(min-width: $screen-desktop) {
    margin-bottom: 0;
  }
}

.about__title {
  font-size: $font-size-h3;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h1;
  }
}

.about__section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  @media(min-width: $screen-desktop) {
    align-items: center;
    align-content: center;
    margin: $space-lg 0;
  }
}

.about__text {
  font-size: $font-size-h4;
  margin: $space-s 0;

  @media(min-width: $screen-desktop) {
    font-size: $font-size-h3;
    margin: $space-m 0;
  }
}

.about__text-gradient {
  background: #707876;
  background: -webkit-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: -moz-linear-gradient(to right, #707876 0%, #153D40 100%);
  background: linear-gradient(to right, #707876 0%, #153D40 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>