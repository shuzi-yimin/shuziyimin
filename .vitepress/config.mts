import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "数字移民教科书",
  // description: "关于中国大陆看奈飞的一切",
  themeConfig: {
    // nav: [
    //   // { text: '首页', link: '/' },
    //   { text: '', link: '/Tutorial/' },
    //   { text: '奈飞好剧', link: '/Movies' }
    // ],

    sidebar: [


      {text: '新手入门',link: 'index' },
      {
        text: '必修课',
        items: [
          { text: '科学上网', link: '/general/internet'},
          { text: '搜索引擎', link: '/general/search_engine.md'},
          { text: 'AI 助手', link: '/general/AI_assistant'}
        ]
      },
      { text: '账号篇', 
      items: [
        { text: '账号', link: '/account/account.md'},
        { text: '支付', link: '/account/pay'},
        { text: '手机', link: '/account/phonenummber'}
      ]
      },
      {
        text: '工具篇',
        items: [
          { text: '常用工具', link: '/general/tools'},
          { text: '进阶之路', link: '/general/evolution'}
        ]
      },
      {
        text: '影音篇',
        items: [
          { text: '简单介绍', link: '/information/' }
          // { text: 'YouTube', link: '/information/youtube/' },
          // { text: 'Netflix', link: '/information/netflix/' },
          // { text: 'Disney+', link: '/information/Disney/' },
        ]
      },
      {
        text: '隐私与安全',
        items: [
          { text: '简单介绍', link: '/security/' }
          // { text: 'YouTube', link: '/information/youtube/' },
          // { text: 'Netflix', link: '/information/netflix/' },
          // { text: 'Disney+', link: '/information/Disney/' },
        ]
      },
      {
        text: '关于我们',
        items: [
          { text: '简单介绍', link: '/about/' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' }
    // ],

    search: {
      provider: 'local'
    }
    ,

    // footer: {
    //   copyright: `版权所有 © 2019-${new Date().getFullYear()} 看奈飞`
    // },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
  }
  ,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  sitemap: {
    hostname: 'https://wiki.kannaifei.com',
    transformItems: (items) => {
      // 添加新选项或修改/过滤现有选项
      items.push({
        url: '/extra-page',
        changefreq: 'monthly',
        priority: 0.8
      })
      return items
    }
  }
})
