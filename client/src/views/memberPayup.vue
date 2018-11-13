<template>

  <div>

    <div class="grid-head"><i></i>快速结账</div>

    <div>
      <x-input style="font-size: 14px;" title="结算账号" placeholder="请输入结算账号" placeholder-align	="left" type="text" v-model="account"></x-input>
    </div>

    <div>
      <x-input style="font-size: 14px;" title="结算金额" placeholder="请输入结算金额" placeholder-align	="left" type="tel" v-model="money"></x-input>
    </div>

    <div class="fixed-container">
     <button class="btn btn-default btn-rounded w60" @click="pays">结 算</button>
    </div>

  </div>
</template>
<script>
  import { XInput } from 'vux'
  export default {
    data(){
      return {
        account:'',
        money:'',
        operator:''
      }
    },
    components: {
      XInput
    },
    created(){
      this.getuserInfo()
    },
    methods: {
      getuserInfo(){
        var _this = this;
        var param = {};
        var url = 'userinfo';
        this.$post(url, param,function(_t, r){
          _this.operator = r.data.name;
          if(r.data.level>2){
            _this.$router.push('/')
          }
        });
      },
      pays(){

        var param = {
          account:this.account,
          costmoney: this.money,
          operator:this.operator
        };
        var url = 'membercost';
        this.$post(url, param,function(_t, r){
          _t.$vux.toast.show({
            text: r.message,
            onHide () {
              _t.$router.go(-1)
            }
          });
        });
      }
    }
  }
</script>
