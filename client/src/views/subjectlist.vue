<template>

  <div>

    <h2 style="margin-top: 20px; font-size: 18px; font-weight: normal; text-align: center">已关注的栏目</h2>

    <div class="grid-head"><i></i>果蔬</div>
    <grid class="grid-content" :cols="5" :show-lr-borders="false" :show-vertical-dividers="false" >
      <grid-item v-for="i in 8" :key="i" class="grid-item" :style="{backgroundColor:bg3()}">
        <img  src="http://fs.51xnb.cn/1a886257-0fcb-498d-90a3-df7b94f09acd.jpg@200w_200h.jpg" >
        <span class="line-clamp-1 grid-center">水果{{i}}</span>
      </grid-item>
    </grid>

    <div class="grid-head"><i></i>化肥</div>
    <grid class="grid-content" :cols="5" :show-lr-borders="false" :show-vertical-dividers="false" >
      <grid-item v-for="i in 8" :key="i" class="grid-item" :style="{backgroundColor:bg3()}">
        <img  src="http://fs.51xnb.cn/1a886257-0fcb-498d-90a3-df7b94f09acd.jpg@200w_200h.jpg" >
        <span class="line-clamp-1 grid-center">水果{{i}}</span>
      </grid-item>
    </grid>

    <div class="fixed-container">
      <button class="btn btn-default btn-rounded w60" @click="editsubject">编辑栏目</button>
    </div>

  </div>
</template>
<script>
  import { Grid, GridItem } from 'vux'
  export default {
    data(){
      return {
        register: true,
        attention: true,
      }
    },
    components: {
      Grid,
      GridItem
    },
    created(){
      if(!this.register){
        var that = this;
        this.$vux.confirm.show({
          title:"温馨提示!",
          confirmText:'注册',
          content: '作物细分栏目只对注册会员开放，请注册后在进入作物栏目！',
          onConfirm(){
            that.$router.push('/article/detail?id=RzycSwJQlgO87qEQrFxo9g')
          }
        })
      }
    },
    methods: {
      bg3(){
        var arr =['#f7fefb','#f6fbfd','#fff7fa','#fffbe7','#fff6f0','#fdf9e8']
        var index =Math.round(Math.random()*(arr.length-1));
        return arr[index];
      },
      editsubject(){
        this.$router.push('/subject/edit')
      },
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .weui-grids {
    background-color: #fff;
  }
</style>
