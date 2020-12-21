<template>
  <div class="comm_wrap">
    <Logo></Logo>
    <div class="comm_cont">
      <div class="fgt_body">
        <div class="fgt_cont">
          <div class="fgt_header">找回密码</div>
          <div class="fgt_mid">
            <el-form :model="form" ref="form" :rules="rules">
              <el-form-item>
                <el-input size="large" v-model="form.pheormal" placeholder="您注册时使用的手机号或邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.v_code"
                  placeholder="收到的验证码"
                  size="large"
                >
                <template slot="append">
                  <el-button>获取验证码</el-button>
                </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" class="fgt_btn">重置密码</el-button>
                <div class="fgt_ret"><a href="/login" class="font_color_blue">返回登录</a></div>
              </el-form-item>
            </el-form>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
import Logo from '../components/Logo.vue';
export default {
  data() {
    return {
      form:{
        pheormal:'',
        v_code:''
      },
    };
  },
  components:{
    Logo
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onSubmit(){
      
    }
  }
};
</script>

<style scoped>
.fgt_header{
  height: 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  border-bottom: solid #E9E9E9 1px;
}
.fgt_body{
  display: flex;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(219, 219, 219, 0.5);
}
.fgt_cont{
  width:400px;
}
.fgt_mid{
  padding: 30px 40px 25px;
}
.fgt_btn{
  width: 100%;
  border-radius: 3px;
  height: 40px;
  font-size: 14px;
}
.fgt_ret{
  width: 100%;
  height:40px;
  font-size: 14px;
  line-height: 40px;
  margin-top: 10px;
}
</style>
