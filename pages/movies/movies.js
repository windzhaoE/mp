// pages/movies/movies.js
var util = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      theaterObj:{
      },
      commingObj:{
      },
      top250:{
      },
      isSearch:false,
      inputValue:'',
      searchData:{
      },
  },
  searchData(){
    this.setData({isSearch:true})
  },
  closeSearch(){
    this.setData({ isSearch: false})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var baseURL = app.globalData.baseUrl;
    //正在热映
    var theatersUrl = "/v2/movie/in_theaters?count=3&start=0";
    // 即将上映
    var commingSoon = "/v2/movie/coming_soon?count=3&start=0";
    // top250
    var top250 = "/v2/movie/top250?count=3&start=0";

    //正在热映
    wx.request({
      url: baseURL + theatersUrl,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        var result = res.data.subjects;
        for(var i=0; i<result.length; i++){
          result[i].starArr = util.formatStar(result[i].rating.stars)
          result[i].type = 1
        }
        var obj = {
          type:"正在热映",
          subjects:res.data.subjects
        }
        this.setData({ theaterObj: obj})
      }
    })
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
          result[i].type = 2
        }
        var obj = {
          type: "即将上映",
          subjects: res.data.subjects
        }
        this.setData({ commingObj: obj })
      }
    })
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
          result[i].type = 3
        }
        var obj = {
          type: "top250",
          subjects: res.data.subjects
        }
        this.setData({ top250: obj })
      }
    })
  },
  // 获取input的值
  getInputData(e) {
    var inputValue = e.detail.value;
    this.setData({ inputValue });
  },
  showSearchData(){
    var baseURL = app.globalData.baseUrl;
    var searchURL = '/v2/movie/search?count=12&start=0&q=' + this.data.inputValue;
    var input = this.data.inputValue;
    // 调取搜索接口获取数据
    wx.request({
      url: baseURL + searchURL,
       header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        var result = res.data.subjects;
        for (var i = 0; i < result.length; i++) {
          result[i].starArr = util.formatStar(result[i].rating.stars);
          result[i].type = 4;
          result[i].input = input;
        }
        var obj = {
          types:'搜索的数据',
          subjects:result
        }
        this.setData({ searchData: obj })
      }
    })
  },
  // 进入电影详情
  toDetail(e){
    var movieid = e.currentTarget.dataset.movieid;
    var types = e.currentTarget.dataset.type;
    var input = e.currentTarget.dataset.input;
    wx.navigateTo({
      url: "/pages/moviedetail/moviedetail?movieid=" + movieid + "&type=" + types + "&input=" + input,
    })
  },
  // 进入更多
  goMore(e){
    var types = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: "/pages/moviesmore/moviesmore?types=" + types,
    })
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