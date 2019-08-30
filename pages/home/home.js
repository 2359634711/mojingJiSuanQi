// pages/home/home.js
const {
  getLogin,
  sendCode,
  login
} = require("../../utils/api.js")
const {
  isPoneAvailable
} = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    sendFlag: true //可以发送
  },
  changeCode(e) {
    this.setData({
      code: e.detail.value
    })
  },
  sendCode() {
    if (!this.data.sendFlag) {
      return
    }
    let {
      phone
    } = this.data;

    if (!isPoneAvailable(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
        duration: 800,
      })
      return
    }
    //验证表单
    //houjia 
    sendCode({
      phone
    }).then(res => {
      console.log(res)
      if (res.error == '0') {
        wx.showToast({
          title: '发送成功',
          duration: 800,
        })
        this.setData({
          timeEnd: 60,
          sendFlag: false
        })
        this.setData({
          timer: setInterval(() => {
            if (this.data.timeEnd < 1) {
              clearInterval(this.data.timer)
              this.setData({
                sendFlag: true
              })
              return
            }
            this.setData({
              timeEnd: this.data.timeEnd - 1
            })

          }, 1000)
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 800,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  changePhone(e) {
    let {
      detail
    } = e;
    this.setData({
      phone: detail.value
    })
  },
  onLoad: function(options) {
    getLogin().then(res => {
      console.log(res)
      this.setData({
        ...res
      })
    })
  },
  login() {
    if (!isPoneAvailable(this.data.phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
        duration: 800,
      })
      return
    }
    if (!this.data.phone || !this.data.code) {
      wx.showToast({
        title: '请填写完整',
        icon: 'none',
        duration: 800,
      })
      return
    }

    wx.redirectTo({
      url: '/pages/index/index'
    })
    return
    login({ ...this.data
    }).then(res => {
      console.log(res)
      if (res.error == 0) {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none',
          duration: 800,
        })
      }
    })



  },
  isPoneAvailable(phone) {

  },
  onNavBottomChange() {

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