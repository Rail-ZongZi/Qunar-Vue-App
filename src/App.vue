<template>
  <div id="app">
    <v-header :seller="seller"/>
    <div class="tab">
      <div class="tab-item">
        <router-link to='/seller'>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/goods'>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>商家</router-link>
      </div>
    </div>
    <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from '@/views/Header/index.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    axios.get('/api/seller').then(res => {
      let Data = res.data
      this.seller = Data.data
    })
  },
  components: {
    'v-header': VHeader
  }
}
</script>

<style lang='scss' rel='stylesheet/scss'>
#app {
  .tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
      & > a {
        font-size: 14px;
        display: inline-block;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20)
        }
      }
    }
  }
}
</style>
