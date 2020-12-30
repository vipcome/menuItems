<template>
  <div class="content-main">
    <scrollIntoView :tabList="tabList" @changeTab="changeTab"></scrollIntoView>
    <div class="content">
      <div class="item" id="baseinfo">基本情况</div>
      <div class="item" id="power">能力评估</div>
      <div class="item" id="capacity">智能检测</div>
      <div class="item" id="physucal">体适能测评</div>
      <div class="item" id="health">健康体检报告</div>
    </div>
  </div>
</template>

<script>
import scrollIntoView from '@/components/scrollIntoView/index'
export default {
  data () {
    return {
      tabList:[
        {
          label:'基础信息',
          value:'#baseinfo',
          active:'active'
        },
        {
          label:'能力评估',
          value:'#power',
          active:''
        },
        {
          label:'智能检测',
          value:'#capacity',
          active:''
        },
        {
          label:'体适能测评',
          value:'#physucal',
          active:''
        },
        {
          label:'健康体检报告',
          value:'#health',
          active:''
        },
      ]
    }
  },

  components: {
    scrollIntoView
  },

  computed: {},

  mounted() {},

  methods: {
    changeTab(item){
      this.tabList.forEach(v => {
        v.active = ''
      });
      item.active = 'active'
      this.$el.querySelector(item.value).scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block:    "center"  // 上边框与视窗顶部平齐。默认值 start
      });
    }
  }
}

</script>
<style lang='scss' scoped>
.content-main{
  font-size: 14px;
  width: 100%;
  .tab-main{
    display: flex;
    flex-direction: row;
    .item{
      width: 120px;
      height: 36px;
      margin-right: 10px;
      background: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      cursor: pointer;
      // .label{
      //   text-decoration: none;
      // }
    }
    .active{
      background: #fff;
      font-family: PingFangSC-Medium;
      color: #d72324;
    }
  }
  .content{
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    .item{
      width: 100%;
      height: 500px;
    }
  }
}
</style>