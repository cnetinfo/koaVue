<template>
  <div>
    <group label-width="4em" label-margin-right="2em" label-align="right">
      <x-input type="text" title="用户名" v-model="value1"></x-input>
      <x-input type="password"title="密码" v-model="value2"></x-input>
      <x-number title="数量" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime title="出生年月" v-model="time1" value-text-align="left"></datetime>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <x-switch title="同意协议"></x-switch>
    </group>
  </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton } from 'vux'

  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch,
      XButton
    },
    data () {
      return {
        value1: '',
        value2: '',
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
      }
    },
    created(){
      this.getuserinfo()
    },
    methods: {
      getuserinfo(){
        var param = {};
        var url = 'userinfo';
        this.$post(url, param,function(_t, r){
          console.log(r)
        },function(_t, r){
          /*_t.$vux.toast.show({
            text: r.message,
            onHide () {
              _t.$router.push('/user')
            }
          });*/
        });

      }
    }
  }
</script>
