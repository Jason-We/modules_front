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
              <el-form-item v-show="togle" prop="phone">
                <el-input v-model="form.phone" placeholder="您的手机号" class="form_item" clearable>
                  <el-select v-model="select_phone_pre" slot="prepend" autocomplete class="select_con">
                    <el-option v-for="item in select_items" :key="item.value" :value="item.value" :label="item.value">
                      <span>{{item.label}} {{item.value}}</span>
                    </el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item v-show="!togle" prop="mail">
                  <el-input v-model="form.mail" placeholder="请输入您的邮箱号" clearable></el-input>
              </el-form-item>
              <el-form-item prop="v_code">
                <el-input class="input-code"
                  v-model="form.v_code"
                  placeholder="收到的验证码"
                >
                </el-input>
                <el-button class="btn-code" :disabled='checkvalid' @click="getCode">{{btnTxt}}</el-button>
              </el-form-item>
              <el-form-item prop="nick">
                <el-input v-model="form.nick" placeholder="昵称"  clearable ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="密码" clearable type="password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <div class="font_size_12">
                  点击注册表明您已阅读并同意<a href="/laws" target="_blank" class="font_color_green">《服务条款》</a>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button class="reg_btn" type="primary" @click="submit">注册</el-button>
              </el-form-item>
              <el-form-item>
                <div class="font_size_12">已有账号？ <a href="/login" class="font_color_green">直接登录</a></div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        
      </div>
      <div class="regis_footer font_size_12 text_align_right">
        {{toggle_text}} <el-button type="text" @click="togleChange">点击此处</el-button>
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
    var regPhone = new RegExp(/^1[3456789]\d{9}$/);
    var regMail = new RegExp(/^\w{6,18}@\w{2,7}\.(com)$/);
    var checkPhone = (rule,value,callback) => {
      if(this.togle){
        if(!value){
          callback(new Error('请输入手机号'));
        }else if(!regPhone.test(value)){
          callback(new Error('手机号格式不正确'));
        }else{
          callback();
        }
      }else{
        callback();
      }
    };
    var checkMail = (rule,value,callback) => {
      if(!this.togle){
        if(!value){
          callback(new Error('请输入邮箱号'));
        }else if(!regMail.test(value)){
          callback(new Error('邮箱号格式不正确'));
        }else{
          callback();
        }
      }else{
        callback();
      }
    }
    return {
      togle:true,
      btnTxt:'获取验证码',
      waitTime:61,
      timer:null,
      form:{
        phone:'',
        mail:'',
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
      ],
      rules:{
        phone:[
          {validator: checkPhone,trigger:'blur'}
        ],
        mail:[
          {validator: checkMail,trigger:'blur'}
        ],
        v_code:[
          {required:true, message:'请输入验证码',trigger:'blur'}
        ],
        nick:[
          {required:true, message:'请输入昵称',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/, message: '密码为6-20位英文字母,数字或者符号(除空格),且字母,数字和标点符号至少包含两种',trigger:'blur' }
        ]
      }
    };
  },
  computed:{
    toggle_text(){
      return this.togle ? "手机号无法注册？" : "邮箱无法注册？";
    },
    checkvalid :{
      get: function(){
        let regPhone = new RegExp(/^1[3456789]\d{9}$/);
        let regMail = new RegExp(/^\w{6,18}@\w{2,7}\.(com)$/);
        if(this.togle){
          if(this.waitTime == 61){
            if(regPhone.test(this.form.phone)){
              return false;
            }
          }
          return true;
        }else{
          if(this.waitTime == 61){
            if(regMail.test(this.form.mail)){
              return false;
            }
          }
          return true;
        }
      },
      set:function(){}  
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    submit(){
      let _this = this;
      this.$refs.form.validate((valid) => {
        if(valid){
          if(this.togle){

          }else{
            axios.get('/regis',{
              params:{
                regType:'mail',
                regNum:this.form.mail,
                code:this.form.v_code,
                nickname:this.form.nick,
                password:this.form.password              
              }
            }).then(function (res) {
                if(res.status === 200){
                  if(res.data.code === 200){
                    _this.$message.success("注册成功");
                    _this.$router.push('/login');
                  }else{
                    _this.$message.error(res.data.msg);
                  }
                } 
            })
          }
        }else{
          alert('前端验证失败');
        }
      })
    },
    togleChange(){
      this.$refs.form.resetFields();
      this.checkvalid = true;
      this.togle = !this.togle;
    },
    getCode(){
      let that = this;
      if(this.togle){
        console.log(this.form.phone);
      }else{
        axios.get('/mailCode',{
          params:{
            mailNo:this.form.mail
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
        console.log(this.form.mail);
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
.el-input--small {
    font-size: 15px;
}
.el-form-item__content .el-input__inner:hover{
  border-color:#66b1ff;
}
.input-code{
  width: 210px;
}
.btn-code{
  width: 100px;
  height:40px;
  margin-left: 10px;
  border-radius: 3px;
  font-size: 15px;
  padding:5px 10px;
}
</style>
