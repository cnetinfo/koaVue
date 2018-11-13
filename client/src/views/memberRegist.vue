<template>
  <div style="font-size: 14px;">
    <group label-width="4em" label-margin-right="2em" label-align="right" >
      <cell style="position: relative; font-size: 14px;" title="会员头像" @click.native.stop="openFile">
        <input type="file" name="file" @change="fileChange()" style="display: none" ref="file" multiple="multiple">
        <img style="position: absolute;right:15px; top:10px;" :src="avator" width="30" height="30">
      </cell>
      <x-input style="font-size: 14px;" type="tel" title="会员卡号" placeholder="请填写会员卡号" text-align="right" v-model="account"></x-input>
      <x-input style="font-size: 14px;" type="text" title="会员姓名" placeholder="请填写会员姓名" text-align="right" v-model="name"></x-input>
      <popup-picker style="font-size: 14px;" title="会员身份" :data="levelList" :columns="2" ref="picker3" show-name v-model="level" placeholder="请选择会员身份" @on-show="onShow" @on-hide="onHide" @on-change="onChange" ></popup-picker>
      <x-input style="font-size: 14px;" type="number" title="首次充值" placeholder="请填写充值金额" text-align="right" v-model="balance"></x-input>
      <x-textarea style="font-size: 14px;" placeholder="请填写会员备注信息" placeholder-align	="right" text-align="right" v-model="notes" :show-counter="false" :rows="3"></x-textarea>

      <x-switch style="font-size: 14px;" title="同意协议"></x-switch>
    </group>


    <div class="fixed-container" style="background: none">
      <button class="btn btn-default btn-rounded w60" @click="activateCard">开 卡</button>
    </div>
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
        level: [],
        levelList:[{
          name: '客户',
          value: '3'
        }, {
          name: '员工',
          value: '2'
        }],
        account:'',
        name:'',
        balance:'',
        notes:'',
        operator:'',
        files:'',
        avator:'/static/images/default-ulogo.png'
      }
    },
    created(){
      this.getuserInfo();
    },
    methods: {
      openFile(){
        this.$refs.file.click(this);
      },
      fileChange: function (e) {
        var that = this;
        var formData = new FormData();
        formData.append('file',this.$refs.file.files[0]);
        var url = 'uploadfile';
        this.$postfile(url, formData,function(_t, r){
          _t.$vux.toast.show({
            text: r.message,
            type: 'text',
            onHide () {
              _t.avator=r.data
            }
          });
        });

      },
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
      activateCard(){
        var param = {
          avator:this.avator,
          account:this.account,
          name:this.name,
          balance:this.balance,
          level: this.level.join(','),
          notes:this.notes,
          operator:this.operator
        };
        if(this.account==''){
          this.$vux.toast.show({
            text: '会员卡号必填',
            type: 'text'
          });
          return
        }
        if(this.name==''){
          this.$vux.toast.show({
            text: '会员姓名必填',
            type: 'text'
          });
          return
        }
        if(this.level.join(',')==''){
          this.$vux.toast.show({
            text: '请选择会员身份',
            type: 'text'
          });
          return
        }
        var url = 'activateMember';
        this.$post(url, param,function(_t, r){
          _t.$vux.toast.show({
            text: r.message,
            onHide () {
              _t.$router.go(-1)
            }
          });
        });

      },
      onChange (val) {
        //console.log(val)
      },
      onShow () {
        //console.log('on show')
      },
      onHide (type) {
        //console.log('on hide', type)
      },
    }
  }
</script>
