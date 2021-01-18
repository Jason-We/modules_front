<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="4">
        <div class="img-logo">
          <img style="width:60px ;height:60px" src="../../assets/img/logo.png" />
        </div>
      </el-col>
      <el-col :span="12">
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
      </el-col>
      <el-col :span="8">
        <div class="right-dropdown">
          <div class="right-dropdown-1">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-plus"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>act1</el-dropdown-item>
                <el-dropdown-item>act2</el-dropdown-item>
                <el-dropdown-item>act3</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="right-dropdown-2">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-s-custom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="personal">我的主页</el-dropdown-item>
                <el-dropdown-item command="help">帮助</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                <el-dropdown-item command="admin" divided>后台管理</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Header',
  data () {
    return {
      items: [
        {
          index: "panel",
          title: "主页",
        },
        {
          index: "jobs",
          title: "工种",
        },
        {
          index: "career",
          title: "生涯",
        },
        {
          index: "personality",
          title: "个性",
        },
      ],
    };
  },
  computed:{
    onRoutes(){
      return this.$route.path.replace('/','');
    }
  },
  methods:{
    handleCommand(cmd){
      if(cmd === 'logout'){
        this.$router.push('/');
      }else if(cmd === 'help'){
        this.$router.push('/info');
      }else if(cmd === 'admin'){
        this.$router.push('/admin');
      }else if(cmd === 'personal'){
        this.$router.push('/personal');
      }
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: block;
  width: 100%;
  height :60px;
  position: fixed;
  top:0;
  left:0;
  -webkit-box-shadow: 0 5px 8px 0 rgba(64,106,103,.13);
  box-shadow: 0 5px 8px 0 rgba(64,106,103,.13);
  background: rgba(255,255,255,.95);
  z-index: 10;
  border-bottom: 2px solid rgb(223, 234, 245);
}
.right-dropdown{
  margin-right:30px;
  padding: 10px 5px;
  float:right;
}
.right-dropdown i{
  font-size: 2.5em;
  vertical-align: center;
}
.right-dropdown-2{
  display: inline-block;
  margin-left: 10px;
}
.right-dropdown-1{
  display: inline-block;
}
.el-dropdown-link{
  cursor: pointer;

}
.img-logo{
  float: right;
  margin-right: 10px;
}
.el-menu-header {
  height: 60px;
}
.el-menu--horizontal>.el-menu-item{
  color: rgba(255,255,255,0.8);
  font-size: 16px;
  font-weight: bold;
}
.el-menu.el-menu--horizontal{
  border-bottom: 2px solid rgb(223, 234, 245);
}
</style>