<template>
    <div class="main">
        <div class="top-bar">
            <top-bar></top-bar>
        </div>
        <div class="content">
            <div class="left-bar">
                <leftBar @changeMuen="change"></leftBar>
            </div>
            <div class="right-content">
                <router-view :key="key" />
            </div>
        </div>
    </div>
</template>

<script>
import topBar from '../layout/components/TopBar'
import leftBar from '../layout/components/LeftBar'
export default {
    components:{
        topBar,
        leftBar
    },
    data(){
        return{
            key:''
        }
    },
    mounted(){

    },
    methods:{
        change(obj){
            console.log("path:",this.$route.path,"obj:",obj)
            if(this.$route.path !== obj){
                this.$router.push({path:obj})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .top-bar{
       width: 100%;
       position: fixed;
    }
    .content{
        position: fixed;
        top: 50px;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        .left-bar{
            width: 176px;   
            height: 100%;
            overflow: auto;
            overflow-x: hidden;
        }
        .right-content{
            width: 100%;
            overflow: auto;
        }
    }
}
</style>