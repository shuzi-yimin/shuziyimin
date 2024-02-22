import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "数字移民教科书",
  description: "数字移民教科书",
  themeConfig: {
    // logo: '/favicon.svg',
    nav: [
      { text: '数字移民常用网站', link: 'https://www.shuziyimin.net' },
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '数字移民', link: '/start/'},
          { text: '科学上网', link: '/start/internet'},
          { text: '搜索引擎', link: '/start/search_engine'},
          { text: 'AI 助手', link: '/start/ai_assistant'}
        ]
      },
      { text: '账号', 
        collapsed: true,
        items: [
          { text: 'Google 账号', link: '/account/Google'},
          { text: 'Google Voice', link: '/account/GoogleVoice'},
          { text: '外区 Apple ID', link: '/account/Apple'},
          { text: '双币信用卡', link: '/account/Card'},
          { text: '美区 PayPal', link: '/account/Paypal'},
          { text: 'Telegram', link: '/account/Telegram'},
          { text: '虚拟身份', link: '/account/Information'}
        ]
      },
      {
        text: '看剧',
        collapsed: true,
        items: [
          { text: '看剧平台', link: '/media/' },
          { text: '看剧教程', link: '/media/Device' },
          { text: 'Netflix', link: '/media/Netflix' },  
          { text: 'Disney+', link: '/media/Disney' },  
          { text: 'HBO', link: '/media/HBO' },  
          { text: 'Primevideo', link: '/media/Primevideo' },
          { text: '会员账号', link: '/media/Account' },   
          { text: 'Youtube', link: '/media/Youtube' },    
          { text: '音乐篇', link: '/media/Music' },
          { text: '少儿频道', link: '/media/Kids' }
          // { text: '电子书', link: '/media/Ebook' },  
          // { text: '博客', link: '/media/Podcast' },  
        ]
      },
      {
        text: '资讯',
        collapsed: true,
        items: [
          { text: '介绍', link: '/news/' },
        ]
      },
      {
        text: '进阶',
        collapsed: true,
        items: [
          { text: '常用工具', link: '/general/tools'},
          { text: '进阶之路', link: '/general/evolution'}
        ]
      },
      {
        text: '隐私与安全',
        collapsed: true,
        items: [
          { text: '简单介绍', link: '/security/' },
          { text: 'Telegram', link: '/security/Telegram'}
          // { text: 'Netflix', link: '/information/netflix/' },
          // { text: 'Disney+', link: '/information/Disney/' },
        ]
      },
      {
        text: '关于',
        collapsed: true,
        items: [
          { text: '关于我们', link: '/about/' },
          { text: '声明与致谢', link: '/about/statement' },
          { text: '感言', link: '/about/remarks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shuzi-yimin/shuziyimin' }
    ],

    footer: {
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 数字移民教科书`
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },


    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '6ZS7OXF4F9',
    //     apiKey: 'd5a387931a43957c6dd9b134da38c8a3',
    //     indexName: 'shuziyimin',
    //     placeholder: '搜索文档',
    //     translations: {
    //     button: {
    //       buttonText: '搜索文档',
    //       buttonAriaLabel: '搜索文档'},
    //     modal: {
    //       searchBox: {
    //         resetButtonTitle: '清除查询条件',
    //         resetButtonAriaLabel: '清除查询条件',
    //         cancelButtonText: '取消',
    //         cancelButtonAriaLabel: '取消'},
    //       startScreen: {
    //         recentSearchesTitle: '搜索历史',
    //         noRecentSearchesText: '没有搜索历史',
    //         saveRecentSearchButtonTitle: '保存至搜索历史',
    //         removeRecentSearchButtonTitle: '从搜索历史中移除',
    //         favoriteSearchesTitle: '收藏',
    //         removeFavoriteSearchButtonTitle: '从收藏中移除'},
    //       errorScreen: {
    //         titleText: '无法获取结果',
    //         helpText: '你可能需要检查你的网络连接'},
    //       footer: {
    //         selectText: '选择',
    //         navigateText: '切换',
    //         closeText: '关闭',
    //         searchByText: '搜索提供者'},
    //       noResultsScreen: {
    //         noResultsText: '无法找到相关结果',
    //         suggestedQueryText: '你可以尝试查询',
    //         reportMissingResultsText: '你认为该查询应该有结果？',
    //         reportMissingResultsLinkText: '点击反馈'}
    //         }
    //       }
    //     }
    //   },

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
    hostname: 'https://shuziyimin.net',
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
