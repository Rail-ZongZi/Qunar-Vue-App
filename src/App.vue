<template>
  <div id="app">
    <div class="header">
      <div class="icon"></div>
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
@import './common/styles/mixin.styl';

.header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: $color-theme;
  font-size: 0;

  .icon {
    width: 30px;
    height: 32px;
    margin-right: 9px;
    bg-image('./assets/logo');
    background-size: 32px 32px;
  }

  h1 {
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
