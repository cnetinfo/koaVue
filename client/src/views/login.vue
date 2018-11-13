<template>
  <div>
    <group label-width="4em" label-margin-right="2em" label-align="right">

      <x-input style="font-size: 14px;" type="text" title="用户名" placeholder="请填写用户名" v-model="name"></x-input>
      <x-input style="font-size: 14px;" type="password" title="密码" placeholder="请填写原来密码"  v-model="password"></x-input>

    </group>

    <div class="center-container">
      <button class="btn btn-default btn-rounded w60" @click="login">登 录</button>
    </div>

  </div>
</template>

<script>
  import { GroupTitle, Group, XInput } from 'vux'

  export default {
    components: {
      GroupTitle, Group, XInput
    },
    data () {
      return {
        name: '',
        password: ''
      }
    },
    created(){

    },
    methods: {
      login(){
        var param = {
          name:this.name,
          password:this.password
        };
        var url = 'signin';
        this.$post(url, param,function(_t, r){
          sessionStorage.setItem('token',r.token);
        },function(_t, r){
          _t.$vux.toast.show({
            text: r.message,
            onHide () {
              var level =  r.data.level;
              var memberId = r.data.memberId;
              var decodeid = _t.hashids.encode(memberId);
              if(level == 3){
                _t.$router.push('/member/userinfo/'+decodeid)//去会员页面
              }else{
                if(_t.$route.query.redirect){
                  _t.$router.push(_t.$route.query.redirect)
                }else{
                  _t.$router.push('/')
                }
              }
            }
          });
        });

      }
    }
  }
</script>
