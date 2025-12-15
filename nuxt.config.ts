export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  /* CSS global */
  css: [
    '~/assets/css/main.css'
  ],

  /* Head global (SEO + typo) */
  app: {
    head: {
      title: 'Maison Élise – Pâtisserie artisanale',
      meta: [
        { name: 'description', content: 'Pâtisserie artisanale – créations délicates pour mariages, baptêmes et événements.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
