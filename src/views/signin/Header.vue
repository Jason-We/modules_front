<template>
  <div class="wrapper">
    <el-row>
      <el-col>
        <div>
          <el-image style="width:50px ;height:50px" src="../../assets/img/logo.png"></el-image>
        </div>
      </el-col>
      <el-col>
        <el-menu
          class="el-menu-header"
          :default-active="dashboard/panel"
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
    </el-row>
  </div>
</template>

<script>
export default {

  data () {
    return {
      items: [
        {
          index: "dashboard/panel",
          title: "主页",
        },
        {
          index: "dashboard/jobs",
          title: "工种",
        },
        {
          index: "dashboard/career",
          title: "生涯",
        },
        {
          index: "dashboard/personality",
          title: "个性",
        },
      ],
    };
  }
}
</script>

<style scoped>

</style>