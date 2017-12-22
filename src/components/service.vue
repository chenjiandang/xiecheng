<template>
 <div id="service">
      
      <div id="service_header">
        <h2 class="clearFloat">
          <img src="../assets/phone.png" alt="phone.png" class="phone">
          <a href="#">订单服务</a>
          <a href="#">售前咨询</a>
          <img src="../assets/return.png" alt="return.png" class="return">
        </h2>
        <div class="service_call clearFloat">
          <p>
            有疑问？可点下方咨询按钮哦~
          </p>
          <img src="../assets/service3.png" alt="timg.jpg" class="service3">
        </div>
      </div>
      <div id="service_order">
        <img src="../assets/service1.png" alt="service1.png">
        <p>对不起，您还没有任何订单哦！</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  background-color: #f5f5f5;
}
#service_header{
  height: 1.5rem;
  width: 100%;
  background: #69caf6;
}
.phone{
  width: .28rem;
  height: .28rem;
  float: left;
  margin: .1rem .4rem 0.1rem 0.2rem;
}
#service_header a{
  display: inline-block;
  padding: .1rem;
  font-size: .18rem;
  color: #fff;
}

.return{
  width: .22rem;
  height: .22rem;
  float: right;
  margin-right: .2rem;
  margin-top: .1rem;
}
.service_call {
  position: relative;
}
.service_call p{
  width: 2rem;
  padding: .08rem;
  font-size: .12rem;
  color: #fff;
  margin-right: .1rem;
  margin-left: .4rem;
  margin-top: .3rem;
  background: rgba(0,0,0,0.2);
  border-radius: 15px;
}
.service3{
  width: 1rem;
  height: 1rem;
  margin-right: .3rem;
  position: absolute;
  bottom: -.42rem;
  right: 0;
}

#service_order img{
  width: 1.2rem;
  margin-top: 1.3rem;
  margin-left: 1.2rem;
}
#service_order p{
  font-size: .14rem;
  color: #333;
  margin-left: 0.9rem;
  margin-top: .18rem;
}
</style>
