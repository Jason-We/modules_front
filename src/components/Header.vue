<template>
  <div class="header">

    <el-menu
      class="el-menu-header"
      :default-active="onRoutes"
      mode="horizontal"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router>
        <template v-for="item in items">
          <el-menu-item :index="item.index" :key="item.index">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
    </el-menu>
    <div class="button_grp">
      <a href="/login" target=""><el-button size="middle" type="primary" plain>登录</el-button></a>
      <a href="/register"><el-button size="middle"  type="primary" plain>注册</el-button></a>
      
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          index: "hello",
          title: "Hello",
        },
        {
          index: "about",
          title: "About",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>

<style scoped>
.header {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
}
.el-menu-header{
  max-width: 900px;
}
.button_grp{
  margin-right: 50px;
  display:flex;
  padding:10px 10px;
  position: absolute;
    right:0;
    top:0;
}
</style>
