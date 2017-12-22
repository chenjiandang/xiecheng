<template>
  <div id="cart">
     <p v-for = "item in orderList" :key = "item.name">
      名称：{{item.name}} 单价：{{item.price}}<br>
      <span @click = "addPro(item)">加</span>数量：{{item.num}}<span @click = "subPro(item)">减</span>
    </p>
    <p>{{total}}</p>
    <router-link to = "/shop">返回</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      orderList:[]
    }
  },
  created(){
      this.orderList = this.$store.state.orderList;
  },
  computed:{
    total(){
      return this.$store.getters.total;
    }
  },
  methods:{
      addPro(item){
        item.num++;
        //添加到订单
      },
      subPro(item){
        if (item.num>0) {
          item.num--;
        }
        for(var n=0; n<this.orderList.length;n++){

          if (item.num <=0) {
              this.orderList.splice(n,1);
          };
        }
      }
  }
  
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
