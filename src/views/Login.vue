<template>
  <div class="login_wrap">
    <div class="logo">
      <a href="/">
        <img
          src="../assets/img/logo.png"
          alt="logo"
          width="50px"
          height="50px"
        />
        <span class="logo-title">Vue JS</span>
      </a>
    </div>
    <div class="container_wrap">
      <div class="container">
        <a href="/info" class="banner">
          <img src="../assets/img/poster.jpg" alt="" class="banner_img" />
        </a>
        <div class="form_con_wraper">
          <el-tabs stretch>
            <el-tab-pane class="header_tabs" label="账号登陆">
              <el-form v-if="login_switch" ref="loginForm" :model="loginForm">
                <el-form-item>
                  <el-input
                    v-model="loginForm.account"
                    placeholder="手机号/邮箱"
                  ></el-input>
                </el-form-item>
                <el-form-item class="pwd">
                  <el-input
                    v-model="loginForm.password"
                    placeholder="密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox-group
                    v-model="loginForm.remember"
                    class="remember_item"
                  >
                    <el-checkbox label="记住我" name="name"></el-checkbox>
                  </el-checkbox-group>
                  <a href="/forgetPass" class="forget_pass">忘记密码?</a>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="login_btn">登 录</el-button>
                </el-form-item>
              </el-form>
              <el-form v-else ref="codeForm" :model="codeForm">
                <el-form-item>
                  <el-input
                    v-model="codeForm.phone"
                    placeholder="手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item class="pwd">
                  <el-input
                    v-model="codeForm.code"
                    placeholder="验证码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox-group
                    v-model="codeForm.remember"
                    class="remember_item"
                  >
                    <el-checkbox label="记住我" name="name"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="login_btn">登 录</el-button>
                </el-form-item>
              </el-form>
              <div class="other_ops">
                <div class="other_ops_items">
                  <span>
                    <el-button type="text" @click="login_switch = !login_switch">{{ loginOps }}</el-button>
                  </span>
                  <span>
                    <el-dropdown trigger="click" placement="bottom">
                      <span class="el-dropdown-link">
                        更多
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>微博登录</el-dropdown-item>
                        <el-dropdown-item>LinkdIn登录</el-dropdown-item>
                        <el-dropdown-item>Twitter登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </span>
                  <span>
                    <el-button type="text" @click="goRegis">注册账号</el-button>
                  </span>
                </div>
                
              </div>
            </el-tab-pane>
            <el-tab-pane class="header_tabs" label="微信登录"
              >微信二维码</el-tab-pane
            >
            <el-tab-pane class="header_tabs" label="QQ登录"
              >QQ二维码</el-tab-pane
            >
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      login_switch: true,
      loginForm: {
        account: "",
        password: "",
        remember: "",
      },
      codeForm: {
        phone: "",
        code: "",
        remember: "",
      },
    };
  },
  computed: {
    loginOps() {
      return this.login_switch ? "验证码登录" : "密码登录";
    },
  },
  created() {},
  mounted() {},
  methods: {
    goRegis(){
      this.$router.push('/register');
    }
  },
};
</script>

<style>
.login_wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f7f7f7;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding: 45px 60px;
  height: 60px;
}

.logo-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-style: oblique;
  font-weight: bold;
}

.container {
  display: flex;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(219, 219, 219, 0.5);
}
.container_wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  vertical-align: middle;
}
.banner {
  position: relative;
  width: 340px;
  height: 450px;
  overflow: hidden;
  vertical-align: middle;
}
.banner_img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 2px 0 0 2px;
}
.form_con_wraper {
  width: 400px;
}
.el-tabs__header .el-tabs__item {
  height: 60px;
  font-size: 15px;
  line-height: 60px;
}
.el-tabs__active-bar {
  height: 3px;
  width: 100px;
  left: 8px;
  right: 8px;
}
.el-form {
  margin-top: 30px;
}
.el-form-item__content {
  margin-left: 40px;
  margin-right: 40px;
}
.el-form-item__content .el-input__inner {
  height: 40px;
}
.pwd {
  margin-top: 30px;
}
.remember_item {
  width: 80px;
}
.remember_item .el-checkbox {
  margin-left: -15px;
  font-size: 12px;
}
.remember_item .el-checkbox__label{
  font-size: 12px;
}
.forget_pass {
  color: #409EFF;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
}
.login_btn {
  width: 100%;
  border-radius: 3px;
  height: 40px;
  font-size: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  font-size: 12px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.other_ops{
  height: 40px;
}
.other_ops_items{
  margin-left: 40px;
  margin-right: 40px;
  text-align: left;
}
.other_ops_items > span {
  margin-left: 15px;
}
.other_ops_items > span:first-child {
  margin-left: 0;
}
.other_ops_items > span:last-child {
  float:right;
}
</style>