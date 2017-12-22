<template>
  <div id="shop">
    <p>日期：{{date}}</p>
    <!-- <p>数量：{{num}}<span @click = "add">加</span></p> -->
    <br>
    <p v-for = "item in proList" :key = "item.name">
      名称：{{item.name}} 单价：{{item.price}}<br>
      <span @click = "addPro(item)">加</span>数量：{{item.num}}<span @click = "subPro(item)">减</span>
    </p>
    <router-link to = "/cart">结算</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      proList:[]
    }
  },
  computed:{
    date(){
      return this.$store.state.date;
    }
  },
  created(){
    //更新日期 使用dispatch 触发actions中的方法
    this.$store.dispatch('set_date');

      this.$http('../../static/shop.json').then((res)=>{
        console.log(res.data);
        this.proList = res.data.list;
        console.log(this.proList);

        var orderList = this.$store.state.orderList;
        for(var n=0; n<orderList.length; n++){
          for(var m=0;m<this.proList.length;m++){
            if (orderList[n].name === this.proList[m].name) {
                this.proList[m].num = orderList[n].num;
            };
          }
        }
      })
  },
  methods:{
      addPro(item){
        item.num++;
        //添加到订单
        this.$store.dispatch('add_Pro',item);
      },
      subPro(item){
        if (item.num>0) {
          item.num--;
          this.$store.dispatch('mus_Pro',item);
        };
      }
  }
 
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
