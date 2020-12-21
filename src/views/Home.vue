<template>
  <div class="home">
    <Header></Header>
    <div class="content">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

  import Header from '../components/Header'
  export default {
    name: 'Home',
    components: {
      Header
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style lang="stylus">
  .home {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #f0f0f0;
    width : 100%;
  }
</style>