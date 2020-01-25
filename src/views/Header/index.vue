<template>
  <header class="shop_detail_header">
    <section class="description_left">
      <img width="64" height="64" :src="seller.avatar" alt="ico-logo" />
    </section>
    <section class="description_right">
      <div class="title">
        <span class="brand"></span>
        <h4 class="name">{{seller.name}}</h4>
      </div>
      <div class="text">
        {{seller.description}}/{{seller.deliveryTime}}分钟
      </div>
      <div class="ellipsis" v-if="seller.supports">
        <span class="brand"></span>
        <span class="title">{{seller.supports[0].description}}</span>
      </div>
    </section>
    <aside class="description_arrow" v-if="seller.supports">
      <span class="count">{{seller.supports.length}}个</span>
      <i class="icon sell-keyboard_arrow_right"></i>
    </aside>
    <footer class="description_footer">
      <span class="brand"></span>
      <span class="title">{{seller.bulletin}}</span>
      <i class="icon sell-keyboard_arrow_right"></i>
    </footer>
  </header>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'Header',
  props: {
    seller: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
</style>
