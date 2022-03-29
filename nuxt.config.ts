import { defineNuxtConfig } from 'nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

export default defineNuxtConfig({
  buildModules: [
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
  ],
  device: {
    refreshOnResize: true
  },
  modules: ['@nuxtjs/color-mode'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
    plugins: [
      Icons({ autoInstall: true }),
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
})
