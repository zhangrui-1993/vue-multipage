<template>
  <el-row class="tac">
        <el-col :span="12">
            <h5>自定义颜色</h5>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1"><a :href = "router.sub1">选项1</a></el-menu-item>
                <el-menu-item index="1-2"><a :href = "router.sub2">选项2</a></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
  let sub1,sub2;
  const sub1Name = 'a',sub2Name = 'b';
  console.log(process.env)
  //router地址判断
  if (process.env.NODE_ENV === "development") {
    sub1 = sub1Name
    sub2 = sub2Name
  }else {
    //所有模块一起打包配置
    // sub1 = sub1Name+'.html'
    // sub2 = sub2Name+'.html'
    //分模块打包的路由配置
    let url = window.location.href; //获取当前页面的url
    let arrUrl = url.split("/dist/"); //获取截取/dist/的数组
    sub1 = arrUrl[0]+'/dist/'+sub1Name+'/index.html'
    sub2 = arrUrl[0]+'/dist/'+sub2Name+'/index.html'
  }
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)
  export default {
    data() {
      return{
        router:{
          sub1:sub1,
          sub2:sub2
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
