import { pwa } from './app/config/pwa'
import { appDescription, appName } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'description', content: appDescription },
        { name: 'author', content: 'Lê Chí Tuyền hocj2me' },
        { name: 'keywords', content: 'what2eat, hôm nay ăn gì, món ăn Việt Nam, công cụ quyết định, ẩm thực Việt' },
        // 颜色与 PWA 支持
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: appName },
        { property: 'og:description', content: appDescription },
        { property: 'og:image', content: 'https://what2eat.hocj2me.com/og-image.png' },
        { property: 'og:url', content: 'https://what2eat.hocj2me.com' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: appName },
        { name: 'twitter:description', content: appDescription },
        { name: 'twitter:image', content: 'https://what2eat.hocj2me.com/og-image.png' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,
})
