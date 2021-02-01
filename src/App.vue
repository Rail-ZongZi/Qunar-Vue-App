<template>
  <div id="app">
    <div class="header">
      <img src="./assets/default.png" alt="login" />
      <h1>ChickenMusic</h1>
    </div>
    <v-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import VHeader from './views/Header'
export default {
  name: 'Header',
  components: {
    'v-header': VHeader,
  },
}
</script>

<style lang="stylus">
@import './common/styles/variable.styl';

.header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    color: $color-theme;
  }
}
</style>
