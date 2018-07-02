// pages/welcome/welcome.js

var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  goRead:function(e){
    //跳转到阅读页面
    // wx.redirectTo({
    //   url: '/pages/read/read',
    // })
    // 层级最多不超过5个；
    // wx.navigateTo({
    //   url: '/pages/read/read',
    // })
    //跳转到有tabbar的页面；
    wx.switchTab({
      url: '/pages/read/read',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (data) {
              // console.log(data.userInfo)
              app.globalData.userInfo = data.userInfo
              wx.switchTab({
                url: '/pages/read/read',
              })
            }
          })
        }else{
         console.log("未授权")
        }
      }
    })
  },

  bindGetUserInfo: function (e) {
    // 查看是否授权了
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (data) {
              console.log(data)
              // console.log(data.userInfo)
              app.globalData.userInfo = data.userInfo
              wx.switchTab({
                url: '/pages/read/read',
              })
            }
          })
        } else {
          // 拒绝授权，直接退出
          wx.navigateBack({
            delta: -1
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log('onshow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})