<template>
  <div class="header">
    <el-menu
      class="el-menu-header"
      :default-active="onRoutes"
      mode="horizontal"
      text-color="rgb(101 106 111)"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <el-menu-item :index="item.index" :key="item.index">
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="button_grp">
      <a href="/login" target=""
        ><el-button class="button_item" size="middle" type="primary" plain>登录</el-button></a
      >
      <a href="/register"
        ><el-button class="button_item" size="middle" type="primary" plain>注册</el-button></a
      >
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
        {
          index: "info",
          title: "Info",
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 2px solid rgb(223, 234, 245);
  z-index: 10;
  -webkit-box-shadow: 0 5px 8px 0 rgba(64,106,103,.13);
  box-shadow: 0 5px 8px 0 rgba(64,106,103,.13);
  background: rgba(255,255,255,.95);
}
.el-menu.el-menu--horizontal{
  border-bottom: 2px solid rgb(223, 234, 245);
  
}
.el-menu--horizontal>.el-menu-item{
  height: 70px;
}
.el-menu-header {
  max-width: 900px;
  height: 70px;
}
.button_grp {
  margin-right: 50px;
  display: flex;
  padding: 17px 10px;
  position: absolute;
  right: 0;
  top: 0;
  
}
.button_item{
  margin-right: 15px;
  height: 35px;
  width: 90px;
  line-height: 10px;
}
</style>
