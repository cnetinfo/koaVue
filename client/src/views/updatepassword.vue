<template>
  <div>
    <group label-width="4em" label-margin-right="2em" label-align="right">
      <x-input style="font-size: 14px;" type="text" title="用户名" placeholder="请填写用户名" :value="name" v-model="name"></x-input>
      <x-input style="font-size: 14px;" type="password" title="旧密码" placeholder="请填写原来密码" v-model="oldpass"></x-input>
      <x-input style="font-size: 14px;" type="password" title="新密码" placeholder="请填写新密码" v-model="newpass"></x-input>
      <x-input style="font-size: 14px;" type="password" title="重复密码" placeholder="请再次填写重复密码" v-model="newagainpass"></x-input>
    </group>
    <div class="center-container">
      <button class="btn btn-default btn-rounded w60" @click="changepass">修 改</button>
    </div>
  </div>
</template>

<script>
  import { Group, XInput } from 'vux'

  export default {
    components: {
      Group, XInput
    },
    data () {
      return {
        name: '',
        oldpass: '',
        newpass: '',
        newagainpass: ''
      }
    },
    created(){
      this.name = this.$route.query.key
    },
    methods: {
      changepass(){
        var param = {
          name:this.name,
          oldpass:this.oldpass,
          newpass:this.newpass,
        };
        var url = 'changepassword'
        this.$post(url, param,function(_t, r){
          _t.$vux.toast.show({
            text: r.message,
            onHide () {
              sessionStorage.removeItem('token');
              _t.$router.push('/login')
            }
          });
        });

      }
    }
  }
</script>
