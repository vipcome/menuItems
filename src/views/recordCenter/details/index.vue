<template>
  <div class="details-main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/recordCenter/list' }">长者档案中心</el-breadcrumb-item>
      <el-breadcrumb-item>长者详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header">
      <topHeader></topHeader>
    </div>
    <div class="content">
      <contentBoy></contentBoy>
    </div>
  </div>
</template>

<script>
import topHeader from './header/index'
import contentBoy from './content/index'
export default {
  data(){
    return{
      id:this.$route.query.id
    }
  },
  components:{
    topHeader,
    contentBoy
  }
}
</script>

<style lang="scss" scoped>
.details-main{
  padding: 20px 0px 0px 20px;
  .header{
    margin-top: 20px;
  }
  .content{
    margin-top: 10px;
  }
}
</style>