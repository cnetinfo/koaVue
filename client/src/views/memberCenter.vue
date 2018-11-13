<template>
  <div style="font-size: 14px;">

    <div style="padding: 10px;">
      <div style=" position: relative">
        <img src="/static/images/svip.png" width="100%">
        <span style="color:#FFFFFF; position: absolute; bottom:10px; right:10px;">NO. {{memberInfo.account}}</span>
      </div>
    </div>


    <hr class="hr"/>

    <card :header="{title:'会员名：'+memberInfo.name}" style="margin-top: 0">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>{{memberInfo.balance}}</span>
          <br/>
          余额
        </div>
        <div class="vux-1px-r">
          <span>{{memberInfo.integral}}</span>
          <br/>
          积分
        </div>
        <div @click="$router.push('/user/pay?account='+memberInfo.account)">
          <span>送</span>
          <br/>
          充值
        </div>
      </div>
    </card>

    <hr class="hr"/>

    <group>
      <cell title="会员卡" class="font-size-normal" link="/user/wallet" style="display: none">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-wallet.png">
      </cell>
      <cell title="消费记录" class="font-size-normal" :link="'/user/costrecord?key='+memberInfo.account">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-transfer.png">
      </cell>
      <cell title="充值记录" class="font-size-normal" :link="'/user/payrecord?key='+memberInfo.account">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-order.png">
      </cell>
      <cell title="修改密码" class="font-size-normal" :link="'/user/updatepass?key='+memberInfo.account">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="/static/images/user-pass.png">
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
        memberInfo:'',
        headtitle:'我的钱包',
      }
    },
    created(){
      this.getmemberInfo();
    },
    methods: {
      getmemberInfo(){
        var _this = this;
        var id = this.$route.params.id
        let paramsId = this.hashids.decode(id)[0]
        var param = {
          memberId:paramsId
        };
        var url = 'getmemberinfo';
        this.$post(url, param,function(_t, r){
          _this.memberInfo = r.data;
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
