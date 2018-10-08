<template>
  <div class="select">
    <div class="select-wrapper">
      <div class="select-header" @click="toSelect" :class="{disabled:disabled}">
        <input type="text" class="title" :placeholder="selectItem.length>0?'':'请选择'" readonly>
        <i class="icon pullup" v-if="showItems"></i>
        <i class="icon pulldown" v-else></i>
        <div class="mul-body" v-if="selectItem.length>0">
          <span class="selected-item" v-for="(item,index) in selectItem" :key="index">{{item.label}}
            <i class="clear" @click.stop="onClear(item)"></i>
          </span>
        </div>
      </div>
      <transition name="slide">
        <ul class="select-items" v-show="showItems">
          <li 
            class="select-item" :class="{active:selectItem.includes(item)}"
            v-for="(item,index) in enumSource" :key="index"
            @click.stop="onSelect(item)">
            {{item.label}}
            <i class="icon selected" v-show="selectItem.includes(item)"></i>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showItems:false,
      selectItem:[],
      disabled:false,
      enumSource:[
        {
          value:1,
          label:'多选1'
        },
        {
          value:2,
          label:'多选2'
        },
        {
          value:3,
          label:'多选3'
        },
        {
          value:4,
          label:'多选4'
        },
        {
          value:5,
          label:'多选5'
        },
      ]
    }
  },
  computed:{
    
  },
  methods: {
    toSelect(){
      if(this.disabled){
        return;
      }
      this.showItems=!this.showItems;
    },
    onSelect(item){
      if(this.selectItem.includes(item)){
        let idx=this.selectItem.indexOf(item);
        this.selectItem.splice(idx,1);
      }else{
        this.selectItem.push(item);
      }
    },
    onClear(item){
      let idx=this.selectItem.indexOf(item);
      this.selectItem.splice(idx,1);
    }
  }
}
</script>
<style scoped lang="stylus">
.select
  padding 10px
  .select-wrapper
    width 100%
    .select-header
      width 100%
      border 1px solid rgba(0,0,0,.4);
      border-radius 4px
      height 36px
      position relative
      &.disabled{
        background #f5f7fa;
      }
      .title
        width calc(100% - 32px)
        height 100%
        border none
        padding  0 8px
        border-radius 4px
        background transparent
      .icon
        width 16px
        height 16px
        display inline-block
        position absolute
        top 10px
        right 8px
        &.pulldown
          background url('./controls/imgs/pulldown.png') center center no-repeat
        &.pullup
          background url('./controls/imgs/pullup.png') center center no-repeat
        &.clear
          right 32px 
          background url('./controls/imgs/clear.png') center center no-repeat
      .mul-body
        width calc(100% - 32px)
        height 100%
        padding  0 8px
        border-radius 4px
        position absolute
        top 0
        left 0
        white-space nowrap
        overflow-x auto
        .selected-item
          display inline-block
          height 24px
          background #f0f2f5
          background-size 12px 12px
          border-radius 3px
          font-size 12px
          line-height 24px
          padding-left 8px
          padding-right 24px
          margin-top 4px
          margin-right 5px
          position relative
          .clear
            display inline-block
            width 16px
            height 16px
            background url('./controls/imgs/clear.png') center center no-repeat
            position absolute
            top 4px
            right 4px
    .select-items
      width 100%
      border 1px solid rgba(0,0,0,.4);
      padding 8px 0
      border-radius 4px
      margin-top 10px
      max-height 200px
      overflow-y auto
      .select-item
        padding 5px 8px
        position relative
        &.active
          background-color #f5f7fa
          color #409eff
          font-weight 600
        .selected
          width 16px
          height 16px
          display inline-block
          position absolute
          top 8px
          right 8px
          background url('./controls/imgs/checked.png') center center no-repeat
      &.slide-enter-active,&.slide-leave-active
        transition all .5s
        transform-origin top center
      &.slide-enter,&.slide-leave-to
        transform:scaleY(0)
      &.slide-enter-to,&.slide-leave
        transform:scaleY(1)
</style>

