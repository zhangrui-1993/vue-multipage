<template>
  <div>
    <h2>这是b模块下受前端路由控制的子模块</h2>
    <div>这一块的内容才是受前端路由控制的</div>
    <nav-sidebar></nav-sidebar>
  </div>
</template>

<script>
import NavSidebar from '../../../components/Nav/index'
export default {
  name: 'b-sub-module1',
  components: {NavSidebar},
  data () {
    return {
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped>
</style>
