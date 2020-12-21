<template>
  <div class="comm_wrap">
    <logo></logo>
    <div class="comm_cont">
      <div class="regis_body">
        <div class="reg_bd">
          <div class="regis_header">
            注册账号
          </div>
          <div class="regis_mid">
            <el-form :model="form" ref="form" :rules="rules" class="form">
              <el-form-item>
                <el-input v-if="togle"  v-model="form.phone" placeholder="您的手机号" class="form_item">
                  <el-select v-model="select_phone_pre" slot="prepend" autocomplete class="select_con">
                    <el-option v-for="item in select_items" :key="item.value" :value="item.value" :label="item.value">
                      <span>{{item.label}} {{item.value}}</span>
                    </el-option>
                  </el-select>
                </el-input>
                <el-input v-else v-model="form.mail" placeholder="请输入您的邮箱号" ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.v_code"
                  placeholder="收到的验证码"
                >
                <template slot="append">
                  <el-button>获取验证码</el-button>
                </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.nick" placeholder="昵称"  clearable ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.password" placeholder="密码" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <div class="font_size_12">
                  点击注册表明您已阅读并同意<a href="/laws" class="font_color_green">《服务条款》</a>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button class="reg_btn" type="primary">注册</el-button>
              </el-form-item>
              <el-form-item>
                <div class="font_size_12">已有账号？ <a href="/login" class="font_color_green">直接登录</a></div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        
      </div>
      <div class="regis_footer font_size_12 text_align_right">
        {{toggle_text}} <el-button type="text" @click="togle = !togle">点击此处</el-button>
      </div>
    </div>
  </div>
</template>


<script>
import Logo from '../components/Logo.vue';
export default {
  name:'Register',
  components:{
    Logo
  }, 
  data() {
    return {
      togle:true,
      form:{
        phone:'',
        v_code:'',
        nick:'',
        password:''
      },
      select_phone_pre:'+86',
      select_items:[
        {
          label:'中国',
          value:'+86'
        },
        {
          label:"中国台湾",
          value:'+886'
        },{
          label:'中国香港',
          value:'+852'
        },{
          label:'中国澳门',
          value:'+853'
        }
      ]
    };
  },
  computed:{
    toggle_text(){
      return this.togle ? "手机号无法注册？" : "邮箱无法注册？";
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style>
.regis_body{
  display: flex;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(219, 219, 219, 0.5);
}
.reg_bd{
  width:400px;
}
.regis_header{
  height: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  border-bottom: solid #E9E9E9 1px;
}
.regis_mid{
  padding: 30px 40px 25px;
}
.form .form_item{ 
  height: 40px;
}
.el-form-item__content .el-input__inner{
  height: 40px;
}
.select_con{
  width:80px;
}
.reg_btn{
  width: 100%;
  border-radius: 3px;
  height: 40px;
  font-size: 14px;
  margin-top :-10px;
}
</style>
