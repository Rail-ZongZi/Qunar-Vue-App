<template>
  <div class="header_containers">
    <div class="tab">
      <router-link class="tab-item" to="/recommend">推荐</router-link>
      <router-link class="tab-item" to="/singer">歌手</router-link>
      <router-link class="tab-item" to="/rank">排行</router-link>
      <router-link class="tab-item" to="/search">搜索</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  data() {
    return {}
  },
}
</script>

<style scoped lang="stylus">
@import '../common/styles/variable.styl';

.header_containers {
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  margin-bottom: 10px;

  .tab {
    display: flex;
    flex-direction: row;

    .tab-item {
      flex: 1;
      display: block;
      text-align: center;
      color: $color-text-l;

      &.router-link-exact-active, .router-link-active {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
