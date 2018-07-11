<template>
    <div class="column mt40">
        <div class="newsList">
            <ul>
                <li v-for="(item, index) in arrList" :key="index">
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
export default {
    data(){
       return {
           arrList:[]
       } 
    },
    mounted(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            let vm=this;
            this.$http.get('src/data/column.data').then(res=>{
                vm.arrList=res.data;
            }).catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
.mt40{
  margin-top: 40px;
}
</style>


