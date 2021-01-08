<template>
  <div>
    <Header></Header>
    <div class="content">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
import {encryptBy,decryptBy} from '../../commonjs/mycrypto';
import Header from './Header.vue'
export default {
  components:{
    Header
  },
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    test(){
      let message = 'asdfqwer';//加密数据
      let key = '12345678';
      //加密
      let encodeStr = encryptBy(message);
      console.log(encodeStr);
      console.log(decryptBy(encodeStr));
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width : 100%;
}
</style>
