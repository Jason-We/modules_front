<template>
  <div>
     <h1>Dashboard</h1>
    <el-button @click="test" type="">点击测试加解密</el-button>
  </div>
</template>


<script>
import {encryptBy,decryptBy} from '../../commonjs/mycrypto';
export default {
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

</style>
