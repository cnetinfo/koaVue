<template>
  <div>
    <div style="height: 44px;">
      <search
        placeholder="搜索会员卡号"
        :results="results"
        v-model="keyword"
        position="fixed"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>
    </div>
    <group>
      <cell class="font-size-normal"  :title="item.account" v-for="(item,index) in dataList" :key="item.id"  :inline-desc="item.costTime" :value="'消费:'+item.costmoney+'元'"></cell>
    </group>


        <div class="loadmore" v-show="loading">
      <span v-if="!loadend"><img src="../assets/images/loader.svg" style="vertical-align: bottom;" width="20" height="20"> 加载中...</span>
      <span v-else>没有更多了~</span>
    </div>
  </div>
</template>

<script>
  import { Search, Group, Cell, Grid, GridItem, Badge, Card  } from 'vux'

  export default {
    components: {
      Search,
      Group,
      Cell,
      Grid,
      GridItem,
      Badge,
      Card
    },
    data () {
      return {
        loading:false,
        loadend:false,
        pending:false,
        pageIndex:1,
        results: [],
        keyword: '',
        dataList:[]
      }
    },
    created(){
      var that = this;
      window.addEventListener('scroll', that.scroller)
      this.getList()
    },
    methods: {
      onSubmit(){
        var keyword = this.keyword;
        this.dataList = [];
        this.pageIndex =1
        this.getList(keyword)
      },
      onCancel(){
        //this.result = !this.result;
      },
      getList(keyword){
        this.loading = true;
        this.pending = true;
        let url = "getcostrecord";
        let param = {
          keyword:keyword,
          page: this.pageIndex
        };
        var _this = this;
        this.$post(url, param, function (_t, r) {
          _this.pending = false;
          var _list = r.data;
          _this.dataList = [..._this.dataList, ..._list];
          if (_list.length==0) {
            _this.loadend = true;
            _this.loading = true;
            _this.pending = true;
            return;
          }
          if(_list.length!=0) {
            _t.pageIndex ++
          }
          if(_list.length<10) {
            _this.loading = false;
          }
        })
      },
      scroller(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条的垂直偏移
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //元素的整体高度
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //元素的可见高度
        if (scrollTop == scrollHeight - clientHeight) {
          if (this.pending) {
            return;
          }
          this.getList()
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
