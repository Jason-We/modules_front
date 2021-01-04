<template>
  <div class="comm_wrap">
    <Logo></Logo>
    <div class="comm_cont">
      <div class="fgt_body">
        <div class="fgt_cont">
          <div class="fgt_header">找回密码</div>
          <div class="fgt_mid">
            <el-form :model="form" ref="form" :rules="rules">
              <el-form-item prop="pheormal">
                <el-input size="large" v-model="form.pheormal" placeholder="您注册时使用的手机号或邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="v_code">
                <el-input class="input-code"
                  v-model="form.v_code"
                  placeholder="收到的验证码"
                  size="large"
                >
                </el-input>
                <el-button class="btn-code" :disabled='checkvalid' @click="getCode">{{btnTxt}}</el-button>
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
      btnTxt:'获取验证码',
      waitTime:61,
      timer:null,
      rules:{
        v_code:[
          {required:true, message:'请输入验证码',trigger:'change'},
          {pattern:/^[0-9]{6}$/ , message:'验证码不规范',trigger:'change'}
        ],
        pheormal:[
          {required:true, message:'请输入手机号/邮箱',trigger:'change'},
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
  computed:{
    checkvalid:{
      get:function(){
        let regPhone = new RegExp(/^1[3456789]\d{9}$/);
        let regMail = new RegExp(/^\w{6,18}@\w{2,7}\.(com)$/);
        if(this.form.pheormal.indexOf("@") === -1){
          if(this.waitTime === 61){
            if(regPhone.test(this.form.pheormal)){
              return false;
            }
          }
          return true;
        }else{
          if(this.waitTime === 61){
            if(regMail.test(this.form.pheormal)){
              return false;
            }
          }
          return true;
        }

      },
      set:function(){}
    }
  },
  methods: {
    onSubmit(){
      let _this = this;
      this.$refs.form.validate((valid) => {
        if(valid){
          if(_this.$store.state.forget_code === '' || _this.$store.state.forget_code != _this.form.v_code){
            _this.$message.error('验证码错误');
          }else{
            _this.$store.commit('setForget_Pheormal',_this.form.pheormal);
            _this.$router.replace('/resetPass');
          }
        }
      })
    },
    getCode(){
      let that = this;
      if(that.form.pheormal.indexOf("@") !== -1){
        axios.get('/mailCode',{
          params:{
            mailNo:this.form.pheormal
          }
        }).then(function(res){
          if(res.status === 200){
            console.log(res.data);
            that.$store.commit('setForget_Code',res.data.data);
          }else{
            that.$message.error("请求服务器异常");
          }
        });
        this.checkvalid = true; 
        this.countDown();
        this.timer = setInterval(function(){
          if(that.waitTime>1){
              that.countDown();
          }else{
              clearInterval(that.timer);
              that.timer = null;
              that.btnTxt = '获取验证码';
              that.checkvalid = false;
              that.waitTime = 61;
          }
        },1000);
      }else{
        alert("抱歉，暂不支持手机号");
      }
      
    },
    countDown(){
      this.waitTime -= 1;
      this.btnTxt = this.waitTime+'s';
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);        
    this.timer = null;
	}
};
</script>

<style>
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
.el-form-item__content .el-input__inner:hover{
  border-color:#66b1ff;
}
.btn-code{
  width: 100px;
  height:40px;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 15px;
  padding:5px 10px;
  float: right;
}
.input-code{
  width: 210px;
} 
</style>
