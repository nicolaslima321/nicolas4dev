<template>
  <div>
    <TheHeaderDefault v-if="$device.isDesktop" />
    <TheHeaderMobile v-else />
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
.index__img {
  border-radius: 50%;
}

span {
  color: #FA56BA
}
</style>