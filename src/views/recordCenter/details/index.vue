<template>
  <div class="details-main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/recordCenter/list' }">长者档案中心</el-breadcrumb-item>
      <el-breadcrumb-item>长者详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header">
      <topHeader :oldMan="oldMan"></topHeader>
    </div>
    <div class="content">
      <contentBoy :contentData="contentData"></contentBoy>
    </div>
  </div>
</template>

<script>
import topHeader from './header/index'
import contentBoy from './content/index'
export default {
  data(){
    return{
      id:this.$route.query.id,
      userData:''
    }
  },
  components:{
    topHeader,
    contentBoy
  },
  computed:{
    oldMan(){
      if(this.userData === ''){
        return {}
      }
      let data = this.userData.base_info.data
      let oldMan={
        user_img:data.user_img,
        user_name:data.user_name,
        user_phone:data.user_phone
      }
      return oldMan
    },
    contentData(){
      if(this.userData === ''){
        return {}
      }
      return this.userData
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      this.http
        .post('/elderlyrecordscentre/elderly_detail', {
          access_token: '94316AFF0DCB987371ED7B6F59751B76',
          id:this.id
        })
        .then((res) => {
          console.log("res:",res)
          if (res.code === 0) {
            this.userData = res.data
          } else {
            this.$message.error(res.msg)
          }
        })
    }
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