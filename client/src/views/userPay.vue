<template>

  <div>

    <div class="grid-head"><i></i>会员充值</div>

    <div>
      <x-input style="font-size: 14px;" title="充值账号" placeholder="请输入充值账号" placeholder-align	="left" type="text" :value="account" v-model="account" :readonly="true"></x-input>

      <div style="font-size: 14px; padding:10px 15px;">
        充值金额
      </div>
      <div class="checkgrid">
        <checker
          v-model="checkvalue"
          default-item-class="checkbox-item"
          selected-item-class="checkbox-item-selected"
        >
          <checker-item v-for="i in [50, 100, 200, '其他金额' ]" :key="i" :value="i" @on-item-click="onItemClick">
            <span class="line-clamp-1 " v-if="i<3">￥{{i}}</span>
            <span class="line-clamp-1 " v-else>{{i}}</span>
            <i class="icon-success"></i>
          </checker-item>
        </checker>

        <input v-if="other" type="number" v-model="othervalue" class="poinput" placeholder="请输入自定义金额"/>
      </div>

      <div style="font-size: 14px; padding:10px 15px;">
        充值方式
      </div>
      <div class="checkgrid">
        <checker v-model="paymentMethod" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected">
          <checker-item value="1">现金<i class="icon-success"></i></checker-item>
          <checker-item value="2">网付<i class="icon-success"></i></checker-item>
        </checker>
      </div>
    </div>

    <div class="fixed-container">
     <button class="btn btn-default btn-rounded w60" @click="pays">充 值</button>
    </div>

  </div>
</template>
<script>
  import { PopupPicker, Group, Cell, XInput, Checker, CheckerItem } from 'vux'
  export default {
    data(){
      return {
        account:'',
        other:false,
        checkvalue:'',
        othervalue:'',
        paymentMethod: '',
        paymentMethodList:[['现金', '网付']],

      }
    },
    components: {
      PopupPicker,
      Group,
      Cell,
      XInput,
      Checker,
      CheckerItem
    },
    created(){
      this.account = this.$route.query.account
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      },
      onChange (val) {
        console.log(val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      onItemClick (value, disabled) {
        if(value == '其他金额'){
          console.log(this.othervalue)
          this.other = true
        }else{
          this.other = false
        }
      },
      pays(){

        var paymentmoney = this.checkvalue;
        if(paymentmoney=='其他金额'){
          paymentmoney = this.othervalue
        }
        var param = {
          account:this.account,
          paymentMethod: this.paymentMethod,
          paymentmoney:paymentmoney,
        };
        var url = 'memberpay';
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
