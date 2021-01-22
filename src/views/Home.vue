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
    margin: 0 auto;
    min-width:600px;
    max-width :1200px;
    width:900px;
  }
  @media screen and (max-width: 1000px) {
    .content {
      width:600px;
    }
  }
  @media screen and (min-width: 1300px) {
    .content {
      width:1200px;
    }
  }
</style>