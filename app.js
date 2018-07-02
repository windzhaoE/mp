//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 检查Session是否过期
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("session_key 未过期")
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        console.log("session_key 已经失效")
        //重新登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            console.log("调用wx.login,并成功获得" + res.code)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    postid: -1,
    isPlay: false,
    baseUrl:  "http://t.yushu.im"
  }
})