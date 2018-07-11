<template>
  <div class="content">
    <slider></slider>
    <div class="newsList">
      <ul>
          <li v-for="(item,index) in arrList" :key="index">
              <router-link :to="'/article/'+item.id">
                <h2>{{index+1}} . {{item.title}}</h2>
                <p>{{item.detail}}</p>
              </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
export default {
  components:{
    Slider
  },
  data(){
    return{
      arrList:[],
    }
  },
  mounted(){
    this.fetchData();//获取数据
  },
  methods:{
    fetchData(){
      let vm=this;
      this.$http.get('src/data/index.data').then(res=>{
        vm.arrList=res.data;
      }).catch(error=>{
        console.log(error);
      })
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/index.css';
</style>


