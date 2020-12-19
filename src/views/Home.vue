<template>
  <div class="home">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from '../components/Header'
export default {
  name: 'Home',
  components:{
    Header
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="stylus">
.home{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.content{
  position :absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
  background: #f0f0f0;
}

</style>