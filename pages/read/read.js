var myList = require("../../data/post-data.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
      message:"你好世界",
      swiperClass:'swiperContainer',
      urlArr: ['../../images/iqiyi.png', '../../images/vr.png','../../images/wx.png'],
      num:1,
      postList:[]
  },
  showDetail:function(e){
      var postid = e.currentTarget.dataset.postid
      wx.navigateTo({
        url: '/pages/readDetail/readDetail?postid=' + postid
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 会从后端,通过调用接口获得真正的数据
    this.setData({ postList: myList.postList});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({ postList: this.data.postList.concat(myList.postList)});
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})