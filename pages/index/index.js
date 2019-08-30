//index.js
//获取应用实例
const app = getApp()
const {
  getIndex
} = require("../../utils/api.js")

Page({
  data: {},
  onload: function(options) {

  },
  onLoad() {
    getIndex().then(res => {
      console.log(res)
      wx.setStorageSync('titleName', res.set.qz_title)
      this.setData({
        ...res.set
      })
    })
  },
  onNavBottomChange(e) {
    let {
      detail
    } = e;
    // if(detail.type == 'change'){
    //   if(detail.data == 1){
    //     wx.navigateTo({
    //       url: '',
    //     })
    //   }
    // }
  }
})