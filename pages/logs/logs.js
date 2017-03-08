//logs.js
var app = getApp();
Page({
  data: {
    username: null,
    password: null
  },
  onLoad: function () {

  },
  loginClick: function () {
    app.appData.userinfo = {username:this.data.username,password:this.data.password}
    wx.redirectTo({url: '../center/center'})
  },
  userName: function (e) {
    this.setData({ username: e.detail.value })
  },
  userPass: function (e) {
    this.setData({ password: e.detail.value })
  }
})
