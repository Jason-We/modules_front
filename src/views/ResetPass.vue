<template>
  <div class="comm_wrap">
    <Logo></Logo>
    <div class="comm_cont">
      <div class="fgt_body">
        <div class="fgt_cont">
          <div class="fgt_header">找回密码</div>
          <div class="fgt_mid">
            <el-form :model="form" ref="form" :rules="rules">
              <el-form-item prop="pass" class="fgt_items">
                <el-input size="large" type="password" v-model="form.pass" placeholder="输入新密码" show-password></el-input>
              </el-form-item>
              <el-form-item prop="rpass" class="fgt_items">
                <el-input
                  v-model="form.rpass"
                  placeholder="确认新密码"
                  size="large" type="password" show-password
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" class="fgt_btn">确定</el-button>
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
    var validatePass = (rule,value,callback) =>{
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致，请检查!'))
      } else {
        callback()
      }
    }
    return {
      form:{
        pass:'',
        rpass:''
      },
      rules:{
        pass:[
          {required:true,message:'请输入密码',trigger:'change'},
          {pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/, message: '密码为6-20位英文字母/数字/符号(除空格),且字母/数字/符号至少包含两种',trigger:'change' }
        ],
        rpass:[
          {required:true,validator:validatePass,trigger:'change'}
        ]
      }
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
      let _this = this;
      console.log(this.$store.state.forget_pheormal);
      this.$refs.form.validate((valid) => {
        if(valid){
          if(_this.$store.state.forget_pheormal.indexOf("@") != -1){
            axios.post('/resetPass',{
              mail:_this.$store.state.forget_pheormal,
              password:_this.form.pass
            }).then(function(res){
              if(res.status === 200){
                if(res.data.code === 200){
                  _this.$message.success("修改成功,5s后将跳转到登录页");
                  setTimeout(() => {
                    _this.$router.replace('/login');
                  },5000)
                }else{
                  _this.$message.success("修改失败"+res.data.msg);
                }
              }
            })
          }else{
            alert('暂未开通手机号注册哦');
          }
          
        }
      })
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
.fgt_items{
  margin-bottom:28px;
}
</style>
