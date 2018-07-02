// pages/moviedetail/moviedetail.js
var util = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputs:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ inputs: options.input})
    var types = options.type;
    var movieid = options.movieid;
    var baseURL = app.globalData.baseUrl;
    //正在热映
    var theatersUrl = "/v2/movie/in_theaters?count=12&start=0";
    // 即将上映
    var commingSoon = "/v2/movie/coming_soon?count=12&start=0";
    // top250
    var top250 = "/v2/movie/top250?count=12&start=0";
    if(types == 1){
      //正在热映
      wx.request({
        url: baseURL + theatersUrl,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          var result = res.data.subjects;
          for (var i = 0; i < result.length; i++) {
            result[i].starArr = util.formatStar(result[i].rating.stars)
            if (result[i].id == movieid){
              this.setData(result[i]);
              break;
            }
          }
        }
      })
    } else if (types == 2){
      // 即将上映
      wx.request({
        url: baseURL + commingSoon,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          var result = res.data.subjects;
          for (var i = 0; i < result.length; i++) {
            result[i].starArr = util.formatStar(result[i].rating.stars)
            if (result[i].id == movieid) {
              this.setData(result[i]);
              break;
            }
          }
        }
      })
    } else if (types == 3){
      // top250
      wx.request({
        url: baseURL + top250,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          var result = res.data.subjects;
          for (var i = 0; i < result.length; i++) {
            result[i].starArr = util.formatStar(result[i].rating.stars)
            if (result[i].id == movieid) {
              this.setData(result[i]);
              break;
            }
          }
        }
      })
    } else if (types == 4){
      var searchURL = '/v2/movie/search?count=12&start=0&q=' + this.data.inputs;
      // 调取搜索接口获取数据
      wx.request({
        url: baseURL + searchURL,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          var result = res.data.subjects;
          for (var i = 0; i < result.length; i++) {
            result[i].starArr = util.formatStar(result[i].rating.stars)
            if (result[i].id == movieid) {
              this.setData(result[i]);
              break;
            }
          }
        }
      })
    }
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})