import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var config = require('../../config')

const store = new Vuex.Store({
  state: {
    basePath: config.build.ApiPath,
    local:config.build.local,
    wxmpid : "",
    partnerid : "",
    siteid:"",
    sitetype:'',
    hasSession:''
  },
  actions: {
    checkSession(){
      var cp = Vue.prototype.getCallParameters();
      var _sid = cp._sid;
      var _t = cp._t;
      var _sign = cp._sign;
      const url = store.state.basePath + 'auth/checkSession.do';
      Vue.prototype.$http.post(url,Vue.prototype.qs.stringify({
        _sid:_sid,
        _t:_t,
        _sign:_sign
      })).then(function (response) {
        var obj = response.data;
        if(obj.code == "200"){
          console.log(obj)
        }else{
          var link = store.state.basePath+"auth/startWeixinAuth.do?_sid="+_sid+"&_t="+_t+"&_sign="+_sign
          window.location.href = link
        }
      });
    },
    getJssdk() {
      var cp = Vue.prototype.getCallParameters();
      var _sid = cp._sid;
      var _t = Vue.prototype.getCallParameters()._t;
      var _sign = Vue.prototype.getCallParameters()._sign;
      if(sessionStorage.getItem('customerPartnerId')==null){
        var customerPartnerId = Vue.prototype.getUrlParameter('customerPartnerId');
        sessionStorage.setItem('customerPartnerId',customerPartnerId);
      }
      var lastcustomerPartnerId = sessionStorage.getItem('customerPartnerId');
      const jssdkUrl = store.state.basePath + 'auth/getWXJSCallParameters.do';
      const locationUrl = document.location.href.split('#')[0];
      Vue.prototype.$http.post(jssdkUrl,Vue.prototype.qs.stringify({
        _sid:_sid,
        _t:_t,
        _sign:_sign,
        url:locationUrl,
        customPartnerId:lastcustomerPartnerId
      })).then(function (response) {
        var obj = response.data;
        if(obj.code == "200"){
          Vue.wechat.config({
            debug: false,
            appId: obj.data.appid,
            timestamp: obj.data.timestamp,
            nonceStr: obj.data.noncestr,
            signature: obj.data.signature,
            jsApiList: [
              'getLocation',
              'chooseImage',
              'previewImage',
              'uploadImage',
              'downloadImage',
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareQZone',
              'onMenuShareWeibo',
              'startRecord',
              'stopRecord',
              'onVoiceRecordEnd',
              'playVoice',
              'pauseVoice',
              'stopVoice',
              'onVoicePlayEnd',
              'uploadVoice',
              'downloadVoice',
              'translateVoice',
              'hideOptionMenu',
              'showOptionMenu',
              'hideAllNonBaseMenuItem',
              'showAllNonBaseMenuItem',
            ]
          })
        }
      });
    },
    wxshare(t,d){
      Vue.wechat.ready(()=>{
        var title = d.title;
        var subTitle = d.subTitle;
        var linkurl = d.linkurl;
        var themeImageUrl = d.themeImageUrl;
        var callbacks = d.callbacks;
        Vue.wechat.showAllNonBaseMenuItem();
        Vue.wechat.onMenuShareAppMessage({
          title: title,
          desc: subTitle,
          link: linkurl,
          imgUrl: themeImageUrl,
          success: callbacks,
        });
        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        Vue.wechat.onMenuShareTimeline({
          title: title,
          link: linkurl,
          imgUrl: themeImageUrl,
          success: callbacks,
        });
        // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
        Vue.wechat.onMenuShareQQ({
          title: title,
          desc: subTitle,
          link: linkurl,
          imgUrl: themeImageUrl
        });
        // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
        Vue.wechat.onMenuShareWeibo({
          title: title,
          desc: subTitle,
          link: linkurl,
          imgUrl: themeImageUrl
        });
        // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
        Vue.wechat.onMenuShareQZone({
          title: title,
          desc: subTitle,
          link: linkurl,
          imgUrl: themeImageUrl
        });
      });
      Vue.wechat.error(function (res) {
        //alert(JSON.stringify(res));
      });
    },
  }
})
export default store
