<template>
  <div>

    <div style="height: 44px;">
      <search
        :results="results"
        v-model="keyword"
        position="static"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>
    </div>
    <div v-if="result">
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
    <div class="history" v-else>
      <div class="his-head">
        <span>历史搜索</span>
        <span class="pull-right" @click="dustbin"><i class="icon-dustbin"></i></span>
      </div>
      <ul class="his-list">
        <li @click="searchTo('苹果种植方式')">苹果种植方式</li>
        <li @click="searchTo('苹果什么时候播种')">苹果什么时候播种</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  import { Search, Cell, CellBox, Group} from 'vux'
  export default{
    data(){
      return {
        loading:false,
        loadend:false,
        pending:false,
        result:false,
        pageIndex:'',
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
        ],
        results: [],
        keyword: ''
      }
    },
    created() {
        console.log(this.keyword)
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
      onSubmit(){
        console.log('on submit')
      },
      onCancel(){
        //this.result = !this.result;
      },
      dustbin (){
        const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
        this.$vux.confirm.show({
          // 组件除show外的属性
          title:"删除提示!",
          content: '确定删除所有的历史搜索记录？',
          onCancel(){
            console.log(this) // 非当前 vm
            console.log(_this) // 当前 vm
          },
          onConfirm(){

          }
        })
      },
      searchTo(t){
        console.log(t)
        this.keyword = t;
        this.result = !this.result;
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
      Search,
      Cell,
      CellBox,
      Group
    },
  }
</script>
