var app=getApp();
Page({
  data:{
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log(app.appData.userinfo);
    if(app.appData.userinfo==null){
        wx.redirectTo({
          url: '../logs/logs'
        })
    }else{
        this.setData({username:app.appData.userinfo.username})
    }
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  }
  
})