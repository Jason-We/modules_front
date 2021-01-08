<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="4">
        <div>
          <img style="width:50px ;height:50px" src="../../assets/img/logo.png" />
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
                <el-dropdown-item command="logout">Sign out</el-dropdown-item>
                <el-dropdown-item command="help">Help</el-dropdown-item>
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
      }
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: block;
  width: 100%;
  height :80px;
  position:absolute;
  top:0;
  left:0;
  padding:5px 0;
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
</style>