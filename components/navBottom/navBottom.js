// components/navBottom/navBottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList: [{
      id: 0,
      title: '关于我们',
      url: '/pages/index/index',
      icon: '/res/icon/3@2x.png',
      activeIcon: ''
    }, {
      id: 1,
      title: '盈利分析',
      url: '/pages/detail/detail',
      icon: '/res/icon/3@2x.png',
      activeIcon: '/res/icon/detail.png.png'
    }]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(e) {
      let {
        index
      } = e.currentTarget.dataset;
      wx.redirectTo({
        url: this.data.navList[index].url,
      })
      return
      this.triggerEvent('onAction', {
        type: 'change',
        data: {
          index
        }
      })
    },
  }
})