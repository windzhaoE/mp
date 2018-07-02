// pages/readDetail/readDetail.js
var app = getApp();

var myList = require("../../data/post-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
        isPlay:false,
        postid:'',
        isCollection:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("----", app.globalData);
    var postid = options.postid;
    this.setData(myList.postList[postid]);
    this.setData({ postid: postid})
    console.log(this.data);

    // //监控播放器的状态；
    // wx.onBackgroundAudioPlay(()=>{
    //   this.setData({isPlay:true})
    //   //更新全局的状态；
    //   app.globalData.postid = this.data.postid;
    //   app.globalData.isPlay = true;
    // });
    // wx.onBackgroundAudioPause(()=>{
    //   this.setData({isPlay:false});
    //   //更新全局的状态；
    //   app.globalData.postid = this.data.postid;
    //   app.globalData.isPlay = false;
    // })

    // if (postid == app.globalData.postid){
    //   this.setData({isPlay:app.globalData.isPlay});
    // }

//读取缓存里的搜藏状态；
    // var collection = wx.getStorageSync(this.data.postid);
    // console.log(collection);
    // if (collection!=""){
    //   this.setData({ isCollection: collection});
    // }




  },
  //播放音乐方法；
  playMusic:function(){
    //改变播放音乐的图标；
      
  //播放音乐；
  if(this.data.isPlay==false){
    //未播放；
    wx.playBackgroundAudio({
      dataUrl: this.data.musicUrl,
      title: this.data.musicTitle,
      coverImgUrl: this.data.musicImg
    })
    console.log(this.data.musicUrl);
//更新全局的状态；
    app.globalData.postid = this.data.postid;
    app.globalData.isPlay = true;

  }else{
      wx.pauseBackgroundAudio();
      //更新全局状态；
      app.globalData.postid = this.data.postid;
      app.globalData.isPlay = false;
  }
  this.setData({ isPlay: !this.data.isPlay });
  console.log(this.data.isPlay); 


  },
  //搜藏功能；
  collectionAction:function(){
    var _this = this;
    wx.showModal({
      title: this.data.isCollection?'确定取消？':'确定收藏？',
      // content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          _this.setData({ isCollection: !_this.data.isCollection });
          //把搜藏状态用缓存存起来；
          wx.setStorageSync(_this.data.postid, _this.data.isCollection);
          wx.showToast({
            title: _this.data.isCollection ? '收藏成功' : '取消成功',
            icon: 'success',
            duration: 2000
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })





      
      // console.log(this.data.isCollection);
  },
  showActionSheet:function(){
    wx.showActionSheet({
      itemList: ['分享到微博', '分享到朋友圈', '发送给朋友'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
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