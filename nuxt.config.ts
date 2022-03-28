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
  meta: [
    { property: "og:site_name", content: "nicolas4dev - Personal tech blog" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://nicolas4dev.com",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Software Development Blog",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Articles focused on Technology and Software Development.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "@/assets/images/main.jpeg",
    },
  ],
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
