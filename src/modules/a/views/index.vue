<template>
  <div class="login-container">
     <el-form ref="loginForm" :model="loginForm" class="login-form" autocomplete="on" label-position="left">
          <div class="title-container">
            <h3 class="title">Login Form</h3>
          </div>
          <el-form-item label="" class="svg-container">
            <i class="el-icon-user-solid"></i>
            <el-input 
              v-model="loginForm.username" 
              name="username">
            </el-input>
          </el-form-item>
          <el-form-item label="" class="svg-container">
            <i class="el-icon-lock"></i>
            <el-input 
              v-model="loginForm.password" 
              name="password" 
              :type="passwordType">
            </el-input>
          </el-form-item>
          <div style="text-align:center;padding-top:12px;">
            <el-button
              type="primary"
              style="width:180px;height:40px;border-radius: 20px;margin-bottom:15px;"
              :loading="loading"
              @click.native.prevent="handleLogin"
            >登录</el-button>
          </div>
     </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loading: false,
        passwordType: "password",
      }
    },
    methods: {
      async handleLogin(e) {
        e.preventDefault()
        const valid =await this.$refs.loginForm.validate();
        if (valid) {
          this.loading = true;
          try{
              const result=await this.$http.post('/api/login',{params:this.loginForm})
              this.loading = false;
              console.log(result.data)
              if(result.data.code=='0'){
                  this.$store.commit('settoken',result.data.token)
                  window.localStorage.setItem('token',result.data.token)
                  let tokenData = window.localStorage.getItem('token');
                  console.log(tokenData)
                  
                  //  判断路由是否带参，带参就去到重定向参数地址，否则就去首页
                  if(this.$route.query.redirect){
                      this.$router.replace({path:this.$route.query.redirect})
                  }else{
                      this.$router.replace({path:'/sub-module1'})
                  }
              }else{
                    alert(result.data.message)
              }
          }catch(err){
              console.log(err)
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      },
    }
    
  }
</script>
</style>
<style lang="scss" >
  .login-form{
    background: rgba(175, 173, 173, 0.596);
    width: 400px;
    height: 300px;
    margin: 10px auto;
  }
 .svg-container {
    .el-input{
      width: auto
    }
  }
</style>