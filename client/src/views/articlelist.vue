<template>
  <div>

    <div class="banner">
      <div class="search-bar" @click="gosearch">
        <i class="icon-search"></i>搜索
      </div>
      <swiper loop auto dots-position="center" :aspect-ratio="320/750">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in banner" :key="index">
          <a :href="item.url">
            <img :src="item.img" height="100%" width="100%">
          </a>
        </swiper-item>
      </swiper>
    </div>

    <div class="notice-bar">
      <span class="notice-lab">
        <i class="icon-notice" ></i>温馨提示：
      </span>
      <marquee>
        <marquee-item v-for="i in 5" :key="i" class="line-clamp-1 notice-scroll">4名男子进入张掖七彩丹霞景区肆意踩踏丹霞彩色丘陵地质地貌的视频。 </marquee-item>
      </marquee>
    </div>
    <scroller lock-y :scrollbar-x=false>
      <div :style="{'width':(5*90)+'px'}">
        <div class="scroller-bar" :class="index==0?'scroller-check':''" v-for="(item,index) in categoryList" >
          <span class="line-clamp-1">{{item.name}}</span>
        </div>
      </div>
    </scroller>
    <div style="height:8px; background-color: #f2f2f2"></div>
    <group>
      <cell @click.native="golink" v-for="(item,index) in dataList" :key="index" >
        <span class="line-clamp-2 font-size-large" style="height: 44px;" slot="title">{{item.title}}</span>
        <img slot="icon" style="display:block; margin-right:10px;" width="95" height="60" :src="item.img">
        <span slot="inline-desc" class="font-size-small">
          {{item.author}} {{item.time}} 阅读：{{item.reader | formatReading}}
        </span>
      </cell>
    </group>

    <div class="loadmore" v-show="loading">
      <span v-if="!loadend"><img src="../assets/images/loader.svg" style="vertical-align: bottom;" width="20" height="20"> 加载中...</span>
      <span v-else>没有更多了~</span>
    </div>
  </div>
</template>
<script type="text/babel">
  import { Swiper,  SwiperItem, Marquee, MarqueeItem, Scroller, Cell, CellBox, Group} from 'vux'
  export default{
    data(){
      return {
        pageId:this.$route.query.id,
        loading:false,
        loadend:false,
        pending:false,
        pageIndex:'',
        categoryList:[
          {name:'苹果'},
          {name:'香蕉'},
          {name:'葡萄'},
          {name:'樱桃'},
          {name:'蓝莓'}
        ],
        banner:[
          {
            url: 'javascript:',
            img: 'http://fs.51xnb.cn/7d71f638-4945-47d0-bd93-0a87ef7f86ce.jpg',
            title: '送你一朵fua'
          }, {
            url: 'javascript:',
            img: 'http://fs.51xnb.cn/9a2d29fe-bf84-4ad7-9a2b-b188c74f1251.jpg',
            title: '送你一次旅行',
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }
        ],
        dataList: [
          {
            title:'葡萄白腐病频发，怎么防治？',
            img:'http://fs.51xnb.cn/7d71f638-4945-47d0-bd93-0a87ef7f86ce.jpg',
            author:'小明',
            time:'2019-01-21 13:14:15',
            reader:'10002'
          },{
            title:'苹果炭疽叶枯病的危害、特征以及防治用药',
            img:'http://fs.51xnb.cn/9a2d29fe-bf84-4ad7-9a2b-b188c74f1251.jpg',
            author:'小黄',
            time:'2019-02-21 13:14:15',
            reader:'111'
          }
        ]
      }
    },
    created() {
        console.log(this.pageId)
    },
    mounted(){
      var param = {};
      var url = 'area/province.do';
      this.$post(url, param,function(_t, r){
        console.log(r)
      },function(_t, r){
        //_t.getList();
      });
    },
    methods: {
      gosearch(){
        this.$router.push('/article/search')
      },
      golink(){
         this.$router.push('/article/detail?id=RzycSwJQlgO87qEQrFxo9g')
      },
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
      scroller(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条的垂直偏移
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //元素的整体高度
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //元素的可见高度
        sessionStorage.setItem('categoryPost', scrollTop);
        deviceModel.position(scrollTop)
        if (scrollTop == scrollHeight - clientHeight) {
          if (this.pending) {
            return;
          }
          this.getList()
        } else if (scrollTop < scrollHeight - clientHeight) {}
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
    filters: {
      formatReading: function (val) {
        var num;
        if(val<=999){
          num = val
        }else if(val>999 && val<10000){
          num = 999 + '+'
        }else if(val>9999){
          num = parseInt(val/10000)  + 'w+'
        }
        return num;
      }
    },
    components: {
      Swiper,
      SwiperItem,
      Marquee,
      MarqueeItem,
      Scroller,
      Cell,
      CellBox,
      Group
    },
  }
</script>
