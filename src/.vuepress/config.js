module.exports = {
  dest: 'docs',
  base: '/guia-fundamentos-de-react/', // VISUALIZACIÓN EN GITHUB
  // base: '/', // VISUALIZACIÓN LOCAL
  title: 'Fundamentos de React',
  description: 'Curso intersemestral de Fundamentos de React.',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
      {
        text: 'Html',
        link: 'https://developer.mozilla.org/es/docs/Web/HTML',
      },
      {
        text: 'Css',
        link: 'https://developer.mozilla.org/es/docs/Web/CSS',
      },
      {
        text: 'Javascript',
        link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
      },
      {
        text: 'React',
        link: 'https://es.reactjs.org/',
      },
      {
        text: 'Vuepress',
        link: 'https://vuepress.vuejs.org/',
      },
      {
        text: 'Markdown',
        link: 'https://markdown.es/',
      },
      {
        text: 'React',
        link: 'https://es.reactjs.org/',
      },
    ],
    sidebar: [
      '/',
      '/00-javascript/',
      '/01-fundamentos/',
      '/random-users-1/',
      '/random-users-2/',
      '/random-users-3/',
      '/random-users-4/',
      '/testimonios/',
      '/contador/',
      '/blackjack/',
      '/todo/',
      '/pokemon/',
    ],
  },

  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
