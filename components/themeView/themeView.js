// components/themeView/themeView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready() {
    console.log('res')
    this.setData({
      themeC: getApp().globalData.themeC,
      themeCG: getApp().globalData.themeCG
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})