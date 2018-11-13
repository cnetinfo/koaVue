<template>
  <div style="font-size: 14px;">
    <div class="user-bg">
      <span class="user-set" style="display:none;">
        <a class="icon_set"></a>
      </span>

      <span class="userimg">
          <img :src="userInfo.avator?userInfo.avator:'/static/images/default-ulogo.png'" width="70" height="70">
        </span>
      <p>{{userInfo.name}}</p>
      <p>{{userInfo.account}}</p>
    </div>

    <hr class="hr" v-if="userInfo.level==1"/>
    <card :header="{title:headtitle}" style="margin-top: 0;" v-if="userInfo.level==1">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>{{count}}</span>
          <br/>
          会员总数
        </div>
        <div class="vux-1px-r">
          <span>{{totalPrice}}</span>
          <br/>
          充值总额
        </div>
        <div>
          <span>{{totalCost}}</span>
          <br/>
          消费总额
        </div>
      </div>
    </card>

    <hr class="hr"/>
    <group>
      <cell title="会员开卡" class="font-size-normal" link="/member/regist">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-vip.png">
      </cell>
      <cell title="会员充值" class="font-size-normal" link="/member/pay">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-pay.png">
      </cell>
      <cell title="快速结账" class="font-size-normal" link="/member/payup">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-payup.png">
      </cell>
    </group>

    <hr class="hr"/>

    <group>
      <cell title="会员卡" class="font-size-normal" link="/member">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-wallet.png">
      </cell>
      <cell title="充值记录" class="font-size-normal" link="/member/payrecord">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-transfer.png">
      </cell>
      <cell title="消费记录" class="font-size-normal" link="/member/costrecord">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-credit.png">
      </cell>
      <cell title="操作日志" class="font-size-normal" link="/member/operatingrecord">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-order.png">
      </cell>
    </group>

    <div class="center-container">
      <button class="btn btn-default btn-rounded w60" @click="loginOut">退出登录</button>
    </div>


  </div>
</template>

<script>
  import { Group, Cell, Grid, GridItem, Badge, Card  } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      Grid,
      GridItem,
      Badge,
      Card
    },
    data () {
      return {
        userInfo:'',
        count:'',
        totalPrice:'',
        totalCost:'',
        headtitle:'会员管理',
      }
    },
    created(){
      this.getuserInfo();
      this.getmemberCount();
      this.getmoneyCount();
      this.getcostmoneyCount();
    },
    methods: {
      getuserInfo(){
        var _this = this;
        var param = {};
        var url = 'userinfo';
        this.$post(url, param,function(_t, r){
          _this.userInfo = r.data;
          var memberId = _this.hashids.encode(r.data.memberId);
          if(r.data.level>2){
            _this.$router.push('/member/userinfo/'+memberId)
          }
        });
      },
      getmemberCount(){
        var _this = this;
        var param = {};
        var url = 'getmembercount';
        this.$post(url, param,function(_t, r){
          _this.count = r.data.count;
        });
      },
      getmoneyCount(){
        var _this = this;
        var param = {};
        var url = 'getmoneycount';
        this.$post(url, param,function(_t, r){
          _this.totalPrice = r.data.totalPrice;
        });
      },
      getcostmoneyCount(){
        var _this = this;
        var param = {};
        var url = 'getcostmoneycount';
        this.$post(url, param,function(_t, r){
          _this.totalCost = r.data.totalCost;
        });
      },
      loginOut(){
        var _this = this;
        this.$vux.confirm.show({
          title: '',
          content: '确定退出该账号？',
          confirmText:'确定',
          cancelText:'取消',
          onConfirm () {
            _this.$vux.toast.show({
              text: '退出成功',
              type: 'text',
              onHide () {
                _this.$router.push('/login')
                sessionStorage.removeItem('token');
              }
            });
          }
        });
      },
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
