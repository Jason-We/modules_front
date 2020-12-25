<template>
  <div class="comm_wrap">
    <Logo></Logo>
    <div class="comm_cont">
      <div class="container">
        <a href="/info" class="banner">
          <img src="../assets/img/poster.jpg" alt="" class="banner_img" />
        </a>
        <div class="form_con_wraper">
          <el-tabs stretch>
            <el-tab-pane class="header_tabs" label="账号登陆">
              <el-form v-show="login_switch" ref="loginForm" :rules="login_rules" :model="loginForm" >
                <el-form-item prop="account">
                  <el-input
                    v-model="loginForm.account"
                    placeholder="手机号/邮箱" clearable
                  ></el-input>
                </el-form-item>
                <el-form-item class="pwd" prop="password">
                  <el-input
                    v-model="loginForm.password" type="password"
                    placeholder="密码" clearable
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
                  <el-button type="primary" class="login_btn" @click="login('loginForm')">登 录</el-button>
                </el-form-item>
              </el-form>
              <el-form v-show="!login_switch" ref="codeForm" :model="codeForm" :rules="code_rules" >
                <el-form-item prop="phone">
                  <el-input
                    v-model="codeForm.phone"
                    placeholder="您的手机号" clearable
                  ></el-input>
                </el-form-item>
                <el-form-item class="pwd" prop="code">
                  <el-input
                    v-model="codeForm.code"
                    placeholder="收到的验证码"
                  >
                  <template slot="append">
                    <el-button :disabled="checkPhoneValid" @click="getCode" >获取验证码</el-button>
                  </template>
                  </el-input>
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
                  <el-button type="primary" class="login_btn" @click="login('codeForm')">登 录</el-button>
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
                    <a href="/register" class="font_size_12 font_color_blue">注册账号</a>
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
import Logo from '../components/Logo'
export default {
  name: "Login",
  components:{
    Logo
  },
  data() {
    return {
      login_switch: true,
      checkValid:false,
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
      login_rules:{
        account:[
          {required:true,message:'请输入手机号或邮箱',trigger:'blur'},
          {pattern:/^1[3456789]\d{9}$|^\w{6,18}@\w{2,4}\.(com)$/,message:'手机号/邮箱格式有误',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
        ]
      },
      code_rules:{
        phone:[
          {required:true,message:'请输入手机号',trigger:'blur'},
          {pattern:/^1[3456789]\d{9}$/,message:'手机号格式有误',trigger:'blur'}
        ],
        code:[
          {required:true, message:'请输入验证码',trigger:'blur'}
        ]
      }
    };
  },
  computed: {
    loginOps() {
      return this.login_switch ? "验证码登录" : "密码登录";
    },
    checkPhoneValid(){
      let reg = new RegExp(/^1[3456789]\d{9}$/);
      return !reg.test(this.codeForm.phone);
    }
  },
  created() {},
  mounted() {},
  methods: {
    login(form){
      let _this = this;
      this.$refs[form].validate((valid) => {
        if(valid){
          if(form === 'loginForm'){
            if(_this.loginForm.account.indexOf("@") === -1){
              axios.post('/login',{
                phone:_this.loginForm.account,
                password : _this.loginForm.password
              }).then(res => {
                if(res.data.code === 200){
                  _this.$router.push('/dashboard');
                }else{
                  _this.$message.error("登录失败 : "+res.data.msg);
                }
              })
            }else{
              axios.post('/login',{
                mail:_this.loginForm.account,
                password : _this.loginForm.password
              }).then(res => {
                if(res.data.code === 200){
                  _this.$router.push('/dashboard');
                }else{
                  _this.$message.error("登录失败 : "+res.data.msg);
                }
              })
            }
          }
        }else{
          alert('前端验证未通过');
        }
      });
    },
    getCode(){
      console.log(this.codeForm.phone);
    }
  },
};
</script>

<style>
.container {
  display: flex;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(219, 219, 219, 0.5);
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
.el-input--small {
    font-size: 15px;
}
</style>