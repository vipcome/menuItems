<template>
  <div class="top-bar">
    <div class="left">
      <img src="@/assets/imgs/logo.png" alt="">
      <span class="title">清源智慧化养老政府监管平台</span>
      <span class="mobile">客服热线 400-606-3626</span>
    </div>
    <div class="right">
      <img src="@/assets/imgs/touxiang.png" alt="" class="head-img">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.top-bar{
    height: 50px;
    // overflow: hidden;
    background: #d72324;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    // position: fixed;
    .left{
      margin-left: 26px;
      display: flex;
      align-items: center;
      .title{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #fff;
        letter-spacing: 0;
        margin: 0px 20px 0px 10px;
      }
      .mobile{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #fff;
        letter-spacing: 0;
      }
    }
    .right{
      display: flex;
      align-items: center;
      padding-right: 20px;
      .head-img{
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
    }
}
</style>