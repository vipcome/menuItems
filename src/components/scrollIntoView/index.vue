<template>
  <div class="content-main">
    <div class="tab-main">
      <div class="item" 
        v-for="(item,index) in tabList" 
        :key="index" @click="changeTab(item)" 
        :class="item.active">
          <span>{{item.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:['tabList'],

  components: {},

  computed: {},

  mounted() {},

  methods: {
    changeTab(item){
        this.$emit('changeTab',item)
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
    }
    .active{
      background: #fff;
      font-family: PingFangSC-Medium;
      color: #d72324;
    }
  }
}
</style>