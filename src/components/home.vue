<template>
  <div id="home" >
      <!-- 主页头部 -->
      <div id="home_title">
        <input type="text" value="搜索:目的地/酒店/景点/航班号">
        <span class = "search"></span>
        <i class="home_head_right"></i>
      </div>
      <!-- 主页广告条 -->
      <div id="home_banner">
        <img src="../assets/banner1.jpg" alt="banner1.jpg">
      </div>
      <!-- 主页导航 -->
      <div id="home_nav">
        <!-- 酒店模块 -->
        <div class="hotel">
          <ul class="clearFloat">
            <li class="listName" id="link-hotel"><router-link to = "/hotel">酒&nbsp;店<span></span></router-link></li>
            <li id="link-oversea" class="detail"><router-link to = "/cart">海外酒店</router-link></li>
            <li class="detail">团购</li>
            <li class="detail">特价酒店</li>
            <li class="detail">民宿.客栈</li>
          </ul>
        </div>
        <div class="ticket">
          <ul class="clearFloat">
            <li id="link-ticket" class="listName"><router-link to = "/ticket">机&nbsp;票<span></span></router-link></li> 
            <li class="detail">火车票.抢票</li>
            <li class="detail">汽车票.船票</li>
            <li class="detail">特价机票</li>
            <li class="detail">专车.租车</li>
          </ul>
        </div>
        <div class="tour">
          <ul class="clearFloat">
            <li id="link-travel" class="listName"><router-link to = "/travel">旅&nbsp;游<span></span></router-link></li>
            <li class="detail">目的地攻略</li>
            <li class="detail">邮轮旅行</li>
            <li class="detail">周边游</li>
            <li class="detail">定制旅行</li>
          </ul>
        </div>
        <div class="cards">
          <ul class="clearFloat">
            <li id="link-play" class="detail"><router-link to = "/play">景点玩乐</router-link></li>
            <li class="detail">美食林</li>
            <li class="detail">购物信用卡</li>
            <li id="link-cards" class="detail"><router-link to = "/cards">礼品卡</router-link></li>
            <li class="detail">WiFi电话卡</li>
            <li class="detail">保险签证</li>
          </ul>
        </div>
      </div>
      <!-- 列表导航进入 -->
      <div id="subNav_enter">
        <ul>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
          <li><span></span>自由行</li>
        </ul>
      </div>
      <!-- 特卖汇 -->
      <div id="favourable">
        <h2 class="section_title">
          <span></span>
          <a href="#">领红包再下单</a>
        </h2>
        <div class="hotTour">
          <ul>
            <li><img src="../assets/favourable2.jpg" alt="favourable2.jpg">
            <p class="hotTour_content">三亚5日自由行(5钻)·暖冬甄选 降价不降温★万人出游·早订享特价+5大礼遇</p>
            <p class="hotTour_price"><b>￥</b>2762起</p>
            <a href="#">省1537</a>
            </li>
            <li>
              <p>千款特价</p>
              <p>走过路过不要错过</p>
              <img src="../assets/pic-tmh-02.png" alt="pic-tmh-02.png">
            </li>
            <li>
              <p>海外精选</p>
              <p>百元<span>出境游</span></p>
              <img src="../assets/pic-tmh-04.png" alt="pic-tmh-04.png">
            </li>
            <li>
              <p>周边玩乐</p>
              <p>十元<span>度周末</span></p>
              <img src="../assets/pic-tmh-03.png" alt="pic-tmh-03.png">
            </li>
          </ul>
        </div>
      </div>
        <!-- 热门活动 -->
        <h2 class="section_title">
          <span></span>
          <a href="#">领红包再下单</a>
        </h2>
       <div class="home_remen clearFloat">
        <div class="home_big_img">
          <img src="../assets/remen1.jpg" alt="">
          <img src="../assets/remen2.jpg" alt="">
        </div>
        <div class="home_small_img">
          <img src="../assets/remen3.jpg" alt="">
          <img src="../assets/remen3.jpg" alt="">
          <img src="../assets/remen3.jpg" alt="">
          <img src="../assets/remen3.jpg" alt="">
        </div>
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
  },
  created(){
    //请求数据
    this.$http("../../static/data.json").then((res)=>{
      console.log(res.data);
    });

     this.$http("/shop").then((res)=>{
      console.log(res.data);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: #fff;
  display: block;
}
</style>
