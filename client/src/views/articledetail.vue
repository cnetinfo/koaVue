<template>
  <div>

    <div class="notice-bar">
      <span class="notice-lab">
        <i class="icon-notice" ></i>特别报道：
      </span>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" class="line-clamp-1 notice-scroll" >4名男子进入张掖七彩丹霞景区肆意踩踏丹霞彩色丘陵地质地貌的视频 </marquee-item>
      </marquee>
    </div>

    <div class="article" style="display: none">

      <h1 class="title">苹果炭疽叶枯病的危害、特征以及防治用药</h1>
      <div class="author">农林卫视   2018-08-01 17:27</div>
      <div class="content">

        <div class="newsCon">
          <p style="TEXT-ALIGN: center">
          <img width="100%" src="http://www.gsta.gov.cn/u/cms/www/201808/291643581r4r.jpg" data-bd-imgshare-binded="1"></p>
          <p>　　8月28日上午，某社交平台发布了4名男子进入张掖七彩丹霞景区肆意踩踏丹霞彩色丘陵地质地貌的视频，引发广泛关注。张掖市委、市政府高度重视，组成联合调查组介入调查，并采取多项措施，加强景区管理。至8月28日21时记者发稿时，其中2名当事人已向临泽县公安局自首，另2人身份正在核查中。</p><p>　　张掖丹霞地貌形成于侏罗纪白垩纪时期，表面是由细砂岩和泥质岩构成，极易被风化侵蚀，类似活化石一样的存在，是不可再生资源，踩一个脚印至少需60年方可恢复原貌。8月13日，就曾发生一位女游客翻过景区护栏在丹霞彩色丘陵地质地貌上拍照的不文明现象。</p><p>　　8月28日中午，张掖市召开联席会议，研究制定加强地质遗迹保护的具体措施。市里多部门组成联合调查组就4名男子破坏丹霞地貌事件介入调查，并邀请甘肃省地矿局水勘院地质专家对破坏的地质地貌进行鉴定。经现场调查，4名男子踩踏的地方属张掖七彩丹霞景区未开放区域，周边部分地段围栏已遭人为破坏。</p><p>　　为加强地质遗迹保护和景区管理，张掖市安排施工人员对七彩丹霞景区的防护栏进行拉网式排查，并对遭到破坏的防护栏进行维修加固。同时，抽调安保人员对景区外围地带进行不间断巡查，防止游客破坏围栏进入地质遗迹保护区域。对已开放的区域，增设警示牌，配强力量，加强监管。此外，还将利用景区电子屏、语音广播反复播放地质遗迹保护的相关规定和文明旅游公约等内容，引导游客自觉保护地质遗迹，杜绝不文明现象。（文／甘肃日报记者　齐兴福）</p></div>

      </div>

    </div>


    <div class="samebg">
      <card :header="{title: '内容详情' }" class="font-size-large" >
        <div slot="content">
          <div class="card-padding">
            <p></p>
            <!--<img slot="header" src="../assets/images/_20171019100242.jpg" style="width:100%;">-->
            <!--<img slot="header" src="../assets/images/_20171019101220.jpg" style="width:100%;">-->
            <!--<img slot="header" src="../assets/images/_20171019101347.jpg" style="width:100%;">-->
            <img slot="header" src="https://dummyimage.com/640x800/333333/00a2ff.png&text=占坑" style="width:100%;">
            <p>　　8月28日上午，某社交平台发布了4名男子进入张掖七彩丹霞景区肆意踩踏丹霞彩色丘陵地质地貌的视频，引发广泛关注。张掖市委、市政府高度重视，组成联合调查组介入调查，并采取多项措施，加强景区管理。至8月28日21时记者发稿时，其中2名当事人已向临泽县公安局自首，另2人身份正在核查中。</p>
          </div>
        </div>
      </card>

      <card  :header="{title: '内容详情' }" class="font-size-large" >
        <div slot="content"  class="card-padding">
          <p>　　8月28日上午，某社交平台发布了4名男子进入张掖七彩丹霞景区肆意踩踏丹霞彩色丘陵地质地貌的视频，引发广泛关注。张掖市委、市政府高度重视，组成联合调查组介入调查，并采取多项措施，加强景区管理。至8月28日21时记者发稿时，其中2名当事人已向临泽县公安局自首，另2人身份正在核查中。</p>
        </div>
      </card>
    </div>



  </div>
</template>
<script type="text/babel">
  import { Marquee, MarqueeItem, Card } from 'vux'
  export default{
    data(){
      return {
        pageId: this.$route.query.id,
      }
    },
    created() {
        console.log(this.pageId)
    },
    mounted(){
      /*var param = {};
      var url = 'area/province.do';
      this.$post(url, param,function(_t, r){
        console.log(r)
      },function(_t, r){
        _t.getList();
      });*/
    },
    methods: {
      getList(){
        this.loading = true;
        this.pending = true;
        let url = "area/province.do";
        let param = {
          lastId: this.pageIndex,
          keyword: this.$route.query.keyword,
          partnerId: this.$route.query.partnerId
        };
        var _this = this;
        this.$post(url, param, function (_t, r) {
          _this.pending = false;
          var _list = r.data;
          _this.dataList = [..._this.dataList, ..._list];
          _this.dataList.forEach(function(item){
            _t.$set(item,'opacity','0');
          });
          if (_list.length==0) {
            _this.loadend = true;
            _this.loading = true;
            _this.pending = true;
            return;
          }
          if(_list.length!=0) {
            _t.pageIndex = _list[_list.length - 1].id
          };
          _this.sharepage();
        })
      },
      sharepage(){
        var sid= localStorage.getItem("sid");
        var linkurl = this.$store.state.local + "video/h5list";
        this.$store.dispatch('getJssdk');
        let d = {
          partnerId: this.$route.query.partnerId
        };
        let l = "form/queryPerPartnerInfo.do";
        this.$post(l, d, function (_t, r) {
          document.title = r.data.title;
          var themeImageUrl = r.data.imgUrl;
          if(themeImageUrl  == undefined||themeImageUrl  == 'undefined'){
            themeImageUrl = _t.dataList[0].bigThumbnail
          }
          //微信分享
          _t.$store.dispatch('wxshare', {
            title: r.data.title,
            subTitle: r.data.subTitle,
            linkurl: linkurl,
            themeImageUrl: themeImageUrl
          });
        });
      }
    },
    components: {
      Marquee,
      MarqueeItem,
      Card
    },
  }
</script>
