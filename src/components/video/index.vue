<template>
  <div class="video">
      <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions"
        ></video-player>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
      videoUrl:{
          type:String,
          defalut(){
              return ''
          }
      },
      type:{
          type:String,
          default(){
              return ''
          }
      },
      playerOptions:{
          type:Object,
          defalut(){
              return null
          }
      }
  },

  watch:{
      playerOptions:{
        handler:function(val){
            if(val){
                console.log("数据：",val)
            }
        },
        deep:true
      }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.video{
    width: 100%;
    height: 100%;
}
</style>