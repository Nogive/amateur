<template>
  <div class="map-box">
    <van-icon name="search" class="search" @click.stop.prevent="onSearch"></van-icon>
    <div class="map-content" id="container">
      <van-icon name="location" class="icon" @click.stop.prevent="onLocation"></van-icon>
      <div class="search-bar" v-show="startSearch">
        <input class="search-input" id="searchInput" placeholder="输入关键字搜素"/>
        <van-icon name="search" class="search"></van-icon>
      </div>
      <div v-show="startSearch" class="result-wrapper" id="searchResults"></div>
    </div>
    <van-cell-group class="near-points" id="pointsWrapper" :style="{maxHeight:posH+'px'}">
      <van-cell v-for="(item,index) in nearlyPoints" :key="item.id" class="point-item" @click="checkPoint(item,index)">
        <template slot="title">
          <span class="name">{{item.name}}</span>
          <span class="address">{{item.address}}</span>
        </template>
        <van-icon v-if="index===selectedIndex" slot="right-icon" name="success" class="icon" />
      </van-cell>
    </van-cell-group>
    <van-cell-group id="rangeWrapper" class="range-column"> 
      <van-cell title="打卡范围" :value="`${range}米`" is-link @click="showRange=true"/>
    </van-cell-group>
    <van-popup class="range-content" v-model="showRange">
      <van-cell-group>
        <van-cell title="打卡范围" />
        <van-cell title="100米" @click.stop="checkClockRange(100)">
          <van-icon v-show="range==100" slot="right-icon" name="success" class="icon" />
        </van-cell>
        <van-cell title="200米" @click="checkClockRange(200)">
          <van-icon v-show="range==200" slot="right-icon" name="success" class="icon" />
        </van-cell>
        <van-cell title="300米" @click="checkClockRange(300)">
          <van-icon v-show="range==300" slot="right-icon" name="success" class="icon" />
        </van-cell>
      </van-cell-group> 
    </van-popup>
  </div>
</template>
<script>
import AMap from 'AMap'
import AMapUI from 'AMapUI'
import BScroll from "better-scroll";
var map;
var circle;
export default {
  data () {
    let _this=this;
    return {
      posH:200,
      close:false,
      showRange:false,
      range:100,
      drag:true,
      address:'',
      center:[121.47519,31.228833],
      changeNearlyPoints:true,
      nearlyPoints:[],
      selectedIndex:0,
      startSearch:false
    }
  },
  mounted(){
    this._initMap();
    this.initPointsHeight();
  },
  methods: {
    initPointsHeight(){
      let aH=window.screen.availHeight;
      let t=document.getElementById('pointsWrapper').offsetTop;
      let fH=document.getElementById('rangeWrapper').offsetHeight;
      this.posH=aH-t-fH
    },
    _initMap(){
      let _this=this;
      map = new AMap.Map('container', {
        zoom:16,
        center: this.center,
        dragEnable: _this.drag,
      });
      this.createCircle();
      map.on('dragstart', function(e) {
        _this.changeNearlyPoints=true;
        _this.selectedIndex=0;
      });
      //定位插件
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          showButton:false,//是否显示定位按钮
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          showMarker:false,
          extensions:'all'
        });
        map.addControl(geolocation);
        _this.geolocation=geolocation;
      });
      //拖拽插件
      AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
        var positionPicker = new PositionPicker({
          mode: 'dragMap',//拖拽地图模式
          map: map
        });
        positionPicker.on('success', function(positionResult) {
          _this.address=positionResult.address;
          _this.center=[positionResult.position.lng,positionResult.position.lat];
          if(_this.changeNearlyPoints){
            _this.nearlyPoints=positionResult.regeocode.pois;
          }
          _this.updateCircle();
        });
        positionPicker.on('fail', function(positionResult) {
          Toast('地图加载出现问题，请保证网络环境，稍后重试~');
        });
        positionPicker.start();
        _this.positionPicker=positionPicker;
      });
    },
    onLocation(){
      var _this=this;
      this.geolocation.getCurrentPosition(function(status,result){
        if(status=='complete'){
          _this.updateMap(result.position,true);
        }else{
          Toast('定位失败，请稍后再试~')
        }
      });
    },
    updateMap(location,updatepios){
      if(updatepios){
        this.selectedIndex=0;
      }
      this.center=[location.lng,location.lat];
      this.changeNearlyPoints=updatepios;
      this.positionPicker.start(this.center);
    },
    createCircle(){
      let _this=this;
      circle=new AMap.Circle({
        center: _this.center,
        radius: _this.range,  //半径
        strokeColor: "rgb(0,160,220)",  //线颜色
        strokeOpacity: 1,  //线透明度
        strokeWeight: 1,  //线粗细度
        fillColor: "rgb(0,160,220)",  //填充颜色
        fillOpacity: 0.35 //填充透明度
      });
      map.add(circle);
    },
    updateCircle(){
      if(circle){
        map.remove(circle);
      }
      this.createCircle();
    },
    checkPoint(item,index){
      console.log(item.name);
      this.selectedIndex=index;
      this.updateMap(item.location,false);
    },
    checkClockRange(range){
      this.showRange=false;
      this.range=range;
      this.updateCircle();
    },
    onSearch(){
      let _this=this;
      this.startSearch=true;
      AMap.plugin('AMap.Autocomplete', function() {
        var auto = new AMap.Autocomplete({
          input: "searchInput",
          output:"searchResults"
        });
        auto.on('select',function(data){
          AMap.service(["AMap.PlaceSearch"], function() {
            //构造地点查询类
            var placeSearch = new AMap.PlaceSearch({ 
              panel: "searchResults", // 结果列表将在此容器中进行展示。
            });
            //关键字查询
            placeSearch.search(data.poi.name);
            placeSearch.on('listElementClick',function(selected){
              _this.startSearch=false;
              _this.updateMap(selected.data.location,true);
            })
          });
        })
      });
    }
  }
}
</script>
<style scoped lang="stylus">
.map-box
  .map-content
    width 100%
    height 300px
    position relative
    .icon
      position absolute
      z-index 2
      font-size 20px
      color rgb(0,160,220)
      right 8px
      bottom 8px
    .search-bar
      position absolute
      z-index 2
      width 100%
      height 35px
      background-color #ffffff
      .amap-ui-poi-picker-sugg
        min-height 265px
        overflow-y scroll
      .search-input
        width 90%
        height 100%
        padding 0 8px
        border none
      .search
        font-size 20px
        position absolute
        right 8px
        top 5px
    .result-wrapper
      position absolute
      width 100%
      max-height 265px
      overflow-y scroll
      top 35px
      left 0
      z-index 2        
  .near-points
    max-height 280px
    overflow-y scroll
    .point-item
      padding 5px 25px 8px 15px
      .name
        display block
      .address
        display block
        font-size 12px
        color rgb(147,153,159)
        line-height 14px
      .icon
        position absolute
        font-size 16px
        color rgb(0,160,220)
        right 8px
        top 25px
  .range-column
    width 100%
    position fixed
    left 0
    bottom 0
  .range-content
    width 80%
  .loading-wrapper
    max-width 80%
    .loading-content
      text-align center
      padding 10px
      .loading-img
        .van-loading
          margin 0 auto
      .text
        font-size 12px
        margin-bottom 0
</style>
