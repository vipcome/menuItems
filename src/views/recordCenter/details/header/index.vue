<!--  -->
<template>
  <div class="header-main">
    <img v-if="oldMan.user_img" :src="oldMan.user_img" alt="" class="img">
    <img v-else src="@/assets/imgs/touxiang.png" alt="" class="img">
    <div class="name">
      {{oldMan.user_name}}
    </div>
    <div class="mobile">
      {{oldMan.user_phone}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
    oldMan:{
      type:Object,
      default:{}
    }
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.header-main{
    background: #ffffff;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .img{
      width: 98px;
      height: 98px;
      padding: 16px 21px;
    }
    .name{
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #000;
      margin-left: 10px;
    }
    .mobile{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000;
      margin-left: 13px;
    }
}
</style>
