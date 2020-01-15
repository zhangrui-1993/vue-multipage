<!-- tip:componens  存放公共的组件 -->
1.vue多页面路由相互跳转问题? //页面中使用a标签跳转
    由于开发环境与生产环境不一致，需区别进行处理
    //router地址判断
    if (process.env.NODE_ENV === "development") {
        sub1 = 'a'
        sub2 = 'b'
    }else {
        sub1 = 'a.html'
        sub2 = 'b.html'
    }
