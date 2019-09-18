module.exports = {
  base: '/',
  title: 'OhMy.xin 使用手册',
  description: '助你轻松创建 Mixin 机器人',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '运营', link: '/operation/' },
      { text: '案例', link: '/examples/' },
      { text: '马上创建', link: 'https://ohmy.xin/' },
    ],
    repo: 'an-lee/docs.ohmy.xin',
    repoLabel: '查看源码',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面',
    sidebar: [
      {
        title: '指南',
        path: '/guide/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/guide/',
          '/guide/register-ohmy',
          '/guide/register-mixin-bot',
          '/guide/generate-keys',
          '/guide/deposit-app',
          '/guide/config-mixin-bot',
          '/guide/manage-app',
        ]
      },
      {
        title: '运营',
        path: '/operation/',
        collapsable: true,
        sidebarDepth: 2,
        children: []
      },
      {
        title: '案例',
        path: '/examples/',
        collapsable: true,
        sidebarDepth: 2,
        children: []
      }
    ],
    sidebarDepth: 2,
    lastUpdated: '上次更新'
  }
}