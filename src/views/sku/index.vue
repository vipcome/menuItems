<template>
  <div class="fater-sku">
      <sku :defaultSel="defaultSel" :memberLevel="memberLevel"></sku>
  </div>
</template>

<script>
import sku from '../../components/sku/index'
export default {
    data(){
        return{
            defaultSel:[
                {value:'自定义',label:'自定义'},
                {value:'会员级别(系统)',label:'会员级别(系统)'}
            ],
            memberLevel:[
                {id:1,label:'普通会员',disabled:true},
                {id:2,label:'白银会员',disabled:true},
                {id:3,label:'黄金会员',disabled:true}
            ]
        }
    },
    components:{
        sku
    }
}
</script>

<style lang='scss' scoped>
.fater-sku{
    padding: 10px;
}
</style>