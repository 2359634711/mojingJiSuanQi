// pages/detail/inputPage/inputPage.js

const {
  startClc
} = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputKeys: [{
      id: 0, //id
      name: 'zc', //input name
      title: '总裁' //文字title
    }, {
      id: 1, //id
      name: 'fz', //input name
      title: '副总' //文字title
    }, {
      id: 2, //id
      name: 'jl', //input name
      title: '经理' //文字title
    }, {
      id: 3, //id
      name: 'zg', //input name
      title: '主管' //文字title
    }, {
      id: 4, //id
      name: 'hy', //input name
      title: '会员' //文字title
    }],
    directInputs: [ //直接
      // {
      //  id: 0,
      //  name: '',
      //   title: '',
      //   value: ''
      // }
    ],
    levelInputs: [{
      //  id: 0,
      //  name: '',
      // title: '',
      // value: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changeOther(e) {
    console.log(e)
    let {
      currentTarget,
      detail
    } = e;
    let {
      key
    } = currentTarget.dataset
    if (typeof detail.value == 'boolean') {
      detail.value = detail.value ? '1' : '0'
    }
    this.setData({
      ['postData.' + key]: detail.value
    })
  },
  inputChange(e) {
    let {
      currentTarget,
      detail
    } = e;
    let {
      relation, //关系
      type, //方式
      index, //id
      num //第几个
    } = currentTarget.dataset
    console.log(e)
    this.setData({
      ['postData.' + this.data.inputKeys[currentTarget.dataset.index].name + (currentTarget.dataset.relation == 'direct' ? '' : '1') + '_' + currentTarget.dataset.type]: detail.value
    })
    console.log(relation)
    if (relation == 'direct') {
      if (type == 'num') {
        this.setData({
          ['directInputs[' + num + '].val_num']: detail.value
        })
      } else {

        this.setData({
          ['directInputs[' + num + '].val_order']: detail.value
        })
      }
    } else {
      if (type == 'num') {

        this.setData({
          ['levelInputs[' + num + '].val_num']: detail.value
        })
      } else {

        this.setData({
          ['levelInputs[' + num + '].val_order']: detail.value
        })
      }
    }
  },
  onLoad: function(options) {
    let {
      level,
      levelId
    } = options;
    this.setData({
      ['postData.shenfen']: levelId
    })
    //顺序替换
    level = 4 - level;


    //带入参数 说明是什么身份

    this.setData({
      level
    })
    //进行计算，对每一种身份进行不同赋值
    let _index = level; //用于比较的index
    if (level == 0 || level == 4)
      _index = level - 1
    let inputsList = []
    this.data.inputKeys.map((val, index) => {
      if (index > _index) {
        inputsList.push({
          ...val,
          value: ''
        })
      }
    })
    this.setData({
      directInputs: inputsList,
      levelInputs: JSON.parse(JSON.stringify(inputsList)) //深拷贝
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
  navRes() {

    //表单验证
    let {
      directInputs,
      levelInputs
    } = this.data;
    for (const item of directInputs) {
      if (!item.val_num || !item.val_order) {
        wx.showToast({
          title: '请填写完整',
          icon: 'none',
          duration: 800,
        })
        return
      }
    }


    for (const item of levelInputs) {
      if (!item.val_num || !item.val_order) {
        wx.showToast({
          title: '请填写完整',
          icon: 'none',
          duration: 800,
        })
        return
      }
    }

    if (!this.data.money || !this.data.fugou_num || !this.data.time) {

      wx.showToast({
        title: '请填写完整',
        icon: 'none',
        duration: 800,
      })
      return
    }

    startClc({ ...this.data.postData
    }).then(res => {
      console.log(res)
    })
    wx.navigateTo({
      url: '../resPage/resPage',
    })
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