<template>
  <div class="left-bar">
      <el-menu
      style="height:100%"
      :default-active="routerPath"
      class="el-menu-vertical-demo"
      @select="handleSelect">
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">数据看板</span>
      </el-menu-item>
      <el-submenu index="/dataAnalyze/dataCenter">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>大数据分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dataAnalyze/dataCenter">数据中心</el-menu-item>
          <el-menu-item index="/dataAnalyze/dataFilter">高级筛选</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/recordCenter/list">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>长者档案中心</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/video">
        <i class="el-icon-video-camera"></i>
        <span slot="title">直播播放器</span>
      </el-menu-item>
      <el-menu-item index="/sku">
        <i class="el-icon-video-camera"></i>
        <span slot="title">多规格</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
        return{
          routerPath:''
        }
    },
    mounted(){
      let pathAll = [{
        path:'/dashboard',
        index:'/dashboard'
      },{
        path:'/dataAnalyze/dataCenter',
        index:'/dataAnalyze/dataCenter'
      },{
        path:'/dataAnalyze/dataFilter',
        index:'/dataAnalyze/dataFilter'
      },{
        path:'/recordCenter/list',
        index:'/recordCenter/list'
      },{
        path:'/recordCenter/details',
        index:'/recordCenter/list'
      },{
        path:'/video',
        index:'/video'
      },{
        path:'/sku',
        index:'/sku'
      }]
      // this.routerPath = this.$route.path
      pathAll.forEach(v=>{
        if(v.path === this.$route.path){
          this.routerPath = v.index
        }
      })
      console.log(this.$route.path)
    },
    methods:{
        handleSelect(key, keyPath) {
          console.log(keyPath)
          this.$emit('changeMuen',key);
        }
    }
}
</script>

<style lang="scss" scope>
.el-menu-item.is-active,.el-submenu__title:hover,.el-menu-item:focus, .el-menu-item:hover{
    background-color: #d72324!important;
    color: #ffffff!important;
}
.left-bar{
    height: 100%;
}
.el-submenu.is-active .el-submenu__title{
  color: #d72324;
}
</style>