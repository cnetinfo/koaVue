
var deviceModel = {
  isAPP:function(){
    if(this.isAndroid()||this.isIos()){
      return true
    }else{
      return false
    }
  },
  isAndroid: function () {  //是否安卓
    if (typeof _uzhiObject == "undefined") {
      return false;
    } else {
      return true;
    }
  },
  isIos: function() { //是否ios
    var u = navigator.userAgent,
      ua = navigator.userAgent.toLowerCase(),
      ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      iPhone = u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad = u.indexOf('iPad') > -1, //是否iPad
      isweixin = ua.match(/MicroMessenger/i) == "micromessenger"; //是否微信网页
    if((ios || iPhone || iPad) && !isweixin) { //为苹果设备
      return true;
    } else {
      return false;
    }
  },

  /*
   * 功能：获取APP登录会话信息
   *
   * */
  checkSessionCB: null,
  checkSession:function(cb){
    this.checkSessionCB = cb;
    if(this.isAndroid()){
      _uzhiObject.checkSession();
    }else if(this.isIos()){
      window.webkit.messageHandlers.checkSession.postMessage('');
    }
  },
  invokeCheckSessionCallback: function(sid,serverKey) {
    if(this.checkSessionCB != undefined) {
      this.checkSessionCB(sid,serverKey);
    }
  },

  testPlay:function(){
    var Jvideo = document.getElementById('J_top_vodeo1');
    setTimeout(function(){
      Jvideo.play();
    },1000);
  },

  position:function(scrollTop){
    if(this.isAndroid()){
      _uzhiObject.position(scrollTop);
    }
  },

  /*
   * 功能：APP分享
   *
   * */
  pageShare: function (shareobj){ //APP右上好友分享，朋友圈。
    if(this.isAndroid()){
      _uzhiObject.pageShare(shareobj.sid, shareobj.title, shareobj.subTitle, shareobj.linkurl, shareobj.themeImageUrl);
    }else if(this.isIos()){
      window.webkit.messageHandlers.pageShare.postMessage(JSON.stringify(shareobj));
    }
  },
  /*
   * 功能：详情APP分享
   *
   * */
  pagedetailShare: function (shareobj){ //好友分享，朋友圈。
    if(this.isAndroid()){
      _uzhiObject.pagedetailShare(shareobj.sid, shareobj.title, shareobj.subTitle, shareobj.linkurl, shareobj.themeImageUrl,shareobj.shareId);
    }else if(this.isIos()){
      window.webkit.messageHandlers.pagedetailShare.postMessage(JSON.stringify(shareobj));
    }
  },
  /*
   * 功能：APP分享
   *
   * */
  registerShare: function (shareobj){ //好友分享，朋友圈。
    if(this.isAndroid()){
      _uzhiObject.registerShare(shareobj.sid, shareobj.title, shareobj.subTitle, shareobj.linkurl, shareobj.themeImageUrl,shareobj.type);
    }else if(this.isIos()){
      window.webkit.messageHandlers.registerShare.postMessage(JSON.stringify(shareobj));
    }
  },

  openH5Window:function(url){
    if(this.isAndroid()){
      _uzhiObject.openH5Window(url);
    }else if(this.isIos()){
      window.webkit.messageHandlers.openH5Window.postMessage(url);
    }
  }

};

window.DeviceModel = deviceModel;

if (window.Vue) {
  window.Vue.use(deviceModel)
}

export { deviceModel }
