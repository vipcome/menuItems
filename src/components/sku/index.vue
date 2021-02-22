<template>
  <div class="sku-main">
      <div class="sku-menu">
          <div class="item" v-for="(item,index) in skuMenu" :key="index">
              <div class="sku-key">
                  <div class="sku-name">
                      <el-select v-model="item.skuName" placeholder="请选择" @change="skuNameChange(item)">
                        <el-option
                        v-for="item in defaultSel"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input style="margin-left:10px" v-show="item.skuName=='自定义' && skuItemNameShow" v-model="skuItemName" placeholder="请输入内容"></el-input>
                    <span class="sku-name-ok" v-show="item.skuName=='自定义' && skuItemNameShow" @click="skuNameOk(index)">确定</span>
                  </div>
                <div class="close" @click="delSku(index)">x</div>
              </div>
              <div class="sku-value">
                <el-input :disabled="ite.disabled" class="item" style="margin-right:10px" v-model="ite.label" placeholder="请输入内容" v-for="(ite,idx) in item.skuKey" :key="idx"></el-input>
                <span v-if="item.skuName!='会员级别(系统)' && item.skuName!=''">+添加</span>
              </div>
              <div class="sku-value-center">

              </div>
          </div>
      </div>
      <div class="add-sku" @click="addSku">添加规格</div>
  </div>
</template>

<script>
export default {
    props:[
        'defaultSel',
        'memberLevel'
    ],
    data(){
        return{
            skuMenu:[],
            skuData:[],
            skuItemName:'',
            skuItemNameShow:true
        }
    },
    mounted(){

    },
    methods:{
        addSku(){
            if(this.skuMenu.length!=0){
                let length = this.skuMenu.length-1
                if(this.skuMenu[length].skuKey.length==0){
                    this.$message.error('请添加规格值');
                    return false
                }
            }
            let obj = {
                skuName:'',
                skuType:'',
                skuKey:[]
            }
            this.skuMenu.push(obj)
            console.log(this.skuMenu)
        },
        delSku(index){
            this.skuMenu.splice(index,1)
        },
        skuNameOk(index){
            this.skuMenu[index].skuName = this.skuItemName
            this.skuItemNameShow = false
        },
        skuNameChange(obj){
            if(obj.skuName=='自定义'){
                this.skuItemNameShow = true
            } else {
                obj.skuKey = this.memberLevel
            }
        },
        getSkuData(){
            
        }
    }
}
</script>

<style lang='scss' scoped>
.sku-main{
    background-color:gray;
    padding: 10px;
    .add-sku{
        width: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color:  darkgrey;
        cursor: pointer;
    }
    .sku-menu{
        .item{
            margin-bottom: 10px;
            .sku-key{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                .close{
                    background-color:  darkgrey;
                    width: 20px;
                    border-radius: 50%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
                .sku-name{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .sku-name-ok{
                        width: 100px;
                        margin-left: 10px;
                        cursor: pointer;
                    }
                }
            }
            .sku-value{
                margin-top: 10px;
                display: flex;
                flex-direction: row;
                .item{
                    width: 100px;
                }
            }
            .sku-value-center{

            }
        }
    }
}
</style>