// pages/detail/detail.js

const {
  getLevels
} = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: [9999, 1, 1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindChange(e) {
    let {
      detail
    } = e;
    let index = (detail.value[0])

    this.setData({
      index
    })
  },
  onLoad: function(options) {
    getLevels().then(res => {
      this.setData({
        ...res
      })
    })
  },
  navInput() {
    wx.navigateTo({
      url: '/pages/detail/inputPage/inputPage?level=' + this.data.index + '&levelId=' + this.data.list[this.data.index].level
    })
  },
  bindPickerChange(e) {
    let {
      detail
    } = e;
    console.log(e)
    this.setData({
      pickIndex: detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})