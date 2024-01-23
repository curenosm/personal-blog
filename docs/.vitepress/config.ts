import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/personal-blog/',
  title: "Blog",
  description: "A personal blog about topics I find interesting.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog-entries'},
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'Blog Entries',
        items: [
          { text: 'Quantum Computing', link: '/contact' },
          { text: 'GPU Programming', link: '/contact' },
          { text: 'Computer Science', link: '/contact'},
          { text: 'Math', link: '/contact' },
          { text: 'Deep Learning', link: '/contact' },
          { text: 'Symbolic Algebra', link: '/contact' },
          { text: 'Automata and Formal Languages', link: '/contact' },
          { text: 'Software Architecture', link: '/contact'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@curenosm5524' },
      { icon: 'github', link: 'https://github.com/curenosm' },
    ]
  }
})
