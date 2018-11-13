
const Pubilc = module.exports;

var countdown = function(date, id) {
  date = date.replace(/:|\s/g, "-");
  var year = date.split('-')[0];
  var month = date.split('-')[1];
  var day = date.split('-')[2];
  var h = date.split('-')[3];
  var m = date.split('-')[4];
  var s = date.split('-')[5];
  var now = new Date();
  var endDate = new Date(year, month - 1, day, h, m, s);
  var leftTime = endDate.getTime() - now.getTime();
  var leftsecond = parseInt(leftTime / 1000);
  var day1 = Math.floor(leftsecond / (60 * 60 * 24));
  var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
  var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
  var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
  if(hour < 10) {
    hour = "0" + hour
  }
  if(minute < 10) {
    minute = "0" + minute
  }
  if(second < 10) {
    second = "0" + second
  }
  var el = document.getElementById(id);
  if(day1 == 0) {
    day1 = "";
  } else {
    day1 = day1 + "天";
  }
  if(el!=null){
    el.innerHTML = day1 + hour + ":" + minute + ":" + second;
  }
};

/*var bernstein = function(key){
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (1313 * hash + key.charCodeAt(i)) % 10000000000;
  }
  return hash.toString();
};
var getCallParameters = function(){
  var data = {};
  var _sid = sessionStorage.getItem("_sid");
  if (_sid == undefined) {
    _sid = "WS" + new Date().getTime();
    sessionStorage.setItem("_sid", _sid);
  } else {
    var serverKey = sessionStorage.getItem("_serverKey");
    if (serverKey==undefined) {
      serverKey = "";
    }
    data._t = new Date().getTime() + "";
    var value = _sid + "&" + serverKey + "&" + data._t;
    data._sign = bernstein(value);
  }
  data._sid = _sid;

  return data;
};
*/

Pubilc.install = function (Vue, options) {


  Vue.prototype.bernstein = function (key){
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = (1313 * hash + key.charCodeAt(i)) % 10000000000;
    }
    return hash.toString();
  };
  Vue.prototype.getCallParameters = function (){
    var data = {};
    var _sid = localStorage.getItem("_sid");
    if (_sid == undefined) {
      _sid = "WS" + new Date().getTime();
      localStorage.setItem("_sid", _sid);
    } else {
      var serverKey = localStorage.getItem("_serverKey");
      if (serverKey==undefined) {
        serverKey = "";
      }
      data._t = new Date().getTime() + "";
      var value = _sid + "&" + serverKey + "&" + data._t;
      data._sign = this.bernstein(value);
    }
    data._sid = _sid;

    return data;
  };

  Vue.prototype.getUrlParameter = function (para){
    var reg = new RegExp("(^|&)" + para + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r?decodeURIComponent(r[2]):null;
  };

  Vue.prototype.arrayUnique = function(ar){
    var a1=(new Date).getTime()
    var m,n=[],o= {};
    for (var i=0;(m= ar[i])!==undefined;i++){
      if (!o[m]){
        n.push(m);o[m]=true;
      }
    }
    return n.sort(function(a,b){return a-b});
  };

  Vue.prototype.hasClass = function(obj, cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };

  Vue.prototype.addClass = function(obj, cls){
    if (!Vue.prototype.hasClass(obj, cls)) obj.className += " " + cls;
  };

  Vue.prototype.removeClass = function(obj, cls){
    if (Vue.prototype.hasClass(obj, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      obj.className = obj.className.replace(reg, ' ');
    }
  };

  Vue.prototype.browsersVersion =function(){
  	var browsers = {
			versions: function() {
				var	u = navigator.userAgent,
					ua = navigator.userAgent.toLowerCase(),
					app = navigator.appVersion;
				return {
					trident: u.indexOf('Trident') > -1, //IE内核
					presto: u.indexOf('Presto') > -1, //opera内核
					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
					iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
					iPad: u.indexOf('iPad') > -1, //是否iPad
					webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
					isweixin:ua.match(/MicroMessenger/i)=="micromessenger",  //是否微信网页
					html5plus:ua.match(/html5plus/)=="html5plus", //app
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase(),
	  };
	return browsers;
  };

  Vue.prototype.formatSeconds = (value,type) =>{
    if(type=='ms'){
      value = value/1000
    }
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    var result;
    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60);
      if(minuteTime<10){
        minuteTime= '0'+''+minuteTime
      }
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60);
      if(secondTime<10){
        secondTime= '0'+''+secondTime
      }
      //如果分钟大于60，将分钟转换成小时
      if(minuteTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60);
        if(hourTime<10){
          hourTime= '0'+''+hourTime
        }
        //获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60);
        if(minuteTime<10){
          minuteTime= '0'+''+minuteTime
        }
      }
      result = "" + secondTime;
    }else{
      result = "00" +':'+ secondTime;
    }
    if(minuteTime > 0) {
      result = "" + minuteTime + ":" + result;
    }
    if(hourTime > 0) {
      result = "" + hourTime + ":" + result;
    }
    return result;
  };

  Vue.prototype.countDownTimer = function(date, id){
    setInterval(function() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      if(month < 10) {
        month = "0" + month
      }
      var day = now.getDate();
      if(day < 10) {
        day = "0" + day
      }
      var h = now.getHours();
      if(h < 10) {
        h = "0" + h
      }
      var m = now.getMinutes();
      if(m < 10) {
        m = "0" + m
      }
      var s = now.getSeconds();
      if(s < 10) {
        s = "0" + s
      }
      var nowtime = year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
      if(nowtime == date) {
        location.reload();
      }
      countdown(date, id);
    }, 1000)
  };

  Vue.prototype.$get = function(link, objdata, success, thenfn, err){
    let _this = this;
    let data ={
      params:objdata
    };
    this.$http.get(link,data).then(function (response) {
      var obj = response.data;
      if(obj.code==200){
        success(_this,obj);
      }else{
        err()
      }
    }).then(function (obj) {
      if(thenfn){
        thenfn(_this,obj)
      }
    }).catch(function (error) {
      console.log(error)
    })
  };

  Vue.prototype.parameter = function(objdata){
    if (objdata == undefined||objdata == '') {
      objdata = {};
    }
    var cp = this.getCallParameters();
    objdata._sid = cp._sid;
    if (cp._t != undefined) {
      objdata._t = cp._t;
      objdata._sign = cp._sign;
    }
    objdata.uid = this.getUrlParameter('uid');
    objdata = this.qs.stringify(objdata)
    return objdata
  };

  Vue.prototype.$post = function(link,objdata,success,thenfn,islogin,showerr){
    let _this = this;
    let url= _this.$store.state.basePath + link;
    var token = sessionStorage.getItem('token');
    var paramheader = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };
    this.$http.post(url,this.parameter(objdata),paramheader).then(function (response) {
      var obj = response.data;
      if(obj.code==200){
        success(_this,obj);
        _this.$vux.loading.hide();
        return obj
      }else if(obj.code==401){
        islogin(_this,obj)
        _this.$vux.loading.hide();
      }else if(obj.code==402){
        localStorage.removeItem("_sid");
        var cp = _this.getCallParameters();
        var _sid = cp._sid;
        var _t = cp._t;
        var _sign = cp._sign;
        var link = _this.$store.state.basePath+"auth/startWeixinAuth.do?_sid="+_sid+"&_t="+_t+"&_sign="+_sign+"&customPartnerId="+_this.getUrlParameter('customerPartnerId');
        window.location.href = link
      }else{
        console.log(obj)
        if(showerr!=1){
          _this.$vux.toast.show({
            text: obj.message,
            type: 'cancel',
            width: '15em'
          });
        }
      }
    }).then(function (obj) {
      if(thenfn){
        thenfn(_this,obj)
      }
    }).catch(function (error) {
      console.log(error)
    })
  };

  Vue.prototype.$postfile = function(link,objdata,success,thenfn,islogin,showerr){
    let _this = this;
    let url= _this.$store.state.basePath + link;
    var token = sessionStorage.getItem('token');
    var paramheader = {
      headers: {
        'enctype': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    };
    this.$http.post(url, objdata, paramheader).then(function (response) {
      var obj = response.data;
      if(obj.code==200){
        success(_this,obj);
        _this.$vux.loading.hide();
        return obj
      }
    }).then(function (obj) {
      if(thenfn){
        thenfn(_this,obj)
      }
    }).catch(function (error) {
      console.log(error)
    });
  };

};
