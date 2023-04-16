module.exports = {
    title: 'fe-node',
    description: '前端学习笔记',
    themeConfig: {
        logo: '/assets/logo.png',
        siteTitle: false,
        nav: [
          { text: 'Node', link: '/node' },
          { text: '计算机网络', link: '/network' },
          { text: 'JavaScript', link: '/javascript' },
          {
            text: '剑指offer',
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' }
            ]
          }
        ]
      }
}