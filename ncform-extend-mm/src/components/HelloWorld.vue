<template>
  <div class="location">
    <van-cell-group>
      <van-field 
        v-model="address" 
        placeholder="点击右侧定位图标进行定位" 
        type="textarea"
        rows="1"
        autosize
        readonly
        icon="location"
        @click-icon="onLocation"/>
    </van-cell-group>
    <div class="map-box" v-if="address!=''">
      <img class="m-img" :src="mapUrl"  alt="暂无">
    </div>
  </div>
</template>
<script>
const mapHost="http://restapi.amap.com/v3/staticmap";
const mapKey="b2a701a4c4e88acd8fac16bbf402484f";
const basecof="&zoom=14&size=400*200&markers=large";
export default {
  data () {
    return {
      address:'',
      lat:0,
      lng:0
    }
  },
  computed:{
    mapUrl:function(){
      let url=mapHost+"?location="+this.lng+","+this.lat+basecof+",,:"+this.lng+","+this.lat+"&key="+mapKey;
      return url;
    }
  },
  methods: {
    onLocation(){
      this.lat=31.179718;
      this.lng=121.406451;
      this.address="上海市徐汇区钦州北路钦汇园71栋";
    }
  }
}
</script>
<style scoped lang="stylus">
.map-box
  width 100%
  height 150px
  .m-img
    width 100%
    height 100%
</style>
