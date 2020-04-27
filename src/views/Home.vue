<template>
  <div class="home">
    <mp-header></mp-header>
    <swipe-container></swipe-container>
  </div>
</template>

<script type="text/ecmascript-6">
import MpHeader from './components/Header.vue';
import SwipeContainer from './components/SwipeContainer.vue';

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    MpHeader,
    SwipeContainer
  }
};
</script>
