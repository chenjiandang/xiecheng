<template>
  <div id="play">
    <div class="play_head">
      <span class="play_back" @click = "back"></span>
      <span class="play_head_city">上海<i class="city_icon"></i></span>
      <span class="play_head_right">...</span>
    </div>
    <div class="play_seach">
      <span class="play_search_icon"></span>
      <input class="play_search_input" type="text" value="景点名称 / 目的地 / 游玩主题">
    </div>
    <div class="play_banner">
      <img src="../assets/play_banner.jpg" alt="">
    </div>
    <div class="play_index_ticket clearFloat">
      <div>
        <span></span>
        <div>门票预订</div>
      </div>
      <div class="play_index_jd">
        <span></span>
        <div>景点攻略</div>
      </div>
    </div>
    <!-- 人气必买 -->
    <div class="play_popular">
      <div class="play_popular_img">
        <img src="../assets/play_popular-site.png" alt="">
      </div>
      <a href="">上海环球金融中心</a>
      <a href="">上海环球金融中心</a>
      <a href="">上海环球金融中心</a>
    </div>

    <div class="play_nav">
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>一日游</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>机场停车</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>特色体验</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>演出赛事</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>交通出行</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>当地美食</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>伴手礼</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>车站停车</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>景区直通车</p>
      </div>
      <div>
        <img src="../assets/ticket1.jpg" alt="">
        <p>旅行服务</p>
      </div>
    </div>
    <div class="play_index_topic">
      <div class="play_topic_left">
        <img src="../assets/play_h1-2.jpg" alt="">
      </div>
      <div class="play_topic_right">
        <img src="../assets/play_topic1.jpg" alt="">
        <img src="../assets/play_topic2.jpg" alt="">
        <img src="../assets/play_topic3.jpg" alt="">
        <img src="../assets/play_topic4.jpg" alt="">
      </div>
    </div>
    <div class="play_title">---上海精选---</div>
    <ul class="play_product_section clearFloat">
      <li  class="clearFloat">
        <div class="play_product_section_img">  
          <img src="../assets/play_product.jpg" alt="">
        </div>
        <div class="play_product_section_right">
          
          <h3>上海迪士尼度假区</h3>
          <p class="play_sale"><span>4.6分</span><i>月销：110677份</i></p>
          <p class="play_icon">主题乐园</p>
          <p class="play_price">￥359 <span>起</span></p>
        </div>
      </li>
      <li  class="clearFloat">
        <div class="play_product_section_img">  
          <img src="../assets/play_product.jpg" alt="">
        </div>
        <div class="play_product_section_right">
          
          <h3>上海迪士尼度假区</h3>
          <p class="play_sale"><span>4.6分</span><i>月销：110677份</i></p>
          <p class="play_icon">主题乐园</p>
          <p class="play_price">￥359 <span>起</span></p>
        </div>
      </li>
      <li  class="clearFloat">
        <div class="play_product_section_img">  
          <img src="../assets/play_product.jpg" alt="">
        </div>
        <div class="play_product_section_right">
          
          <h3>上海迪士尼度假区</h3>
          <p class="play_sale"><span>4.6分</span><i>月销：110677份</i></p>
          <p class="play_icon">主题乐园</p>
          <p class="play_price">￥359 <span>起</span></p>
        </div>
      </li>
      <li  class="clearFloat">
        <div class="play_product_section_img">  
          <img src="../assets/play_product.jpg" alt="">
        </div>
        <div class="play_product_section_right">
          
          <h3>上海迪士尼度假区</h3>
          <p class="play_sale"><span>4.6分</span><i>月销：110677份</i></p>
          <p class="play_icon">主题乐园</p>
          <p class="play_price">￥359 <span>起</span></p>
        </div>
      </li>
      <li  class="clearFloat">
        <div class="play_product_section_img">  
          <img src="../assets/play_product.jpg" alt="">
        </div>
        <div class="play_product_section_right">
          
          <h3>上海迪士尼度假区</h3>
          <p class="play_sale"><span>4.6分</span><i>月销：110677份</i></p>
          <p class="play_icon">主题乐园</p>
          <p class="play_price">￥359 <span>起</span></p>
        </div>
      </li>
    </ul>
    <div class="play_getmore">查看上海全部产品</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    back:function(){
          window.location.href = "../index.html"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset'utf-8';
body{
  background-color: #efefef;
}
.play_head{
  color: #fff;
  background-color: #19A0F0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  z-index: 10;
}
.play_back,.city_icon{
  width: 0.2rem;
  height: 0.2rem;
  background: url(../assets/me.png) 0 -0.2rem;
  background-size: 222%;
  position: absolute;
  left: 0.2rem;
  top: 0.1rem;
}
.city_icon{
  left: 1.8rem;
  transform: rotate(-90deg);
  top: 0.08rem;
}
.play_head_city{
  margin-left: 1.4rem;
}
.play_head_right{
  float: right;
  font-size: 36px;
  line-height: 0.25rem;
  margin-right: 0.1rem;
}
.play_seach{
  width: 100%;
  padding: 0.09rem 0.15rem;
  background-color:  #19A0F0;
  margin-top: 0.44rem;
  position: relative;
}
.play_search_input{
  width: 3.45rem;
  border: none;
  height: 0.33rem;
  padding-left: 0.4rem;
  border-radius: 7px;
  color: #999;
  /*margin-left: 0.1rem;*/
}
.play_search_icon{
  position: absolute;
  width: 0.22rem;
  height: 0.22rem;
  background:url(../assets/search.png);
  background-size: 100%;
  left: 0.25rem;
  top: 0.15rem;
}
.play_banner{
  height: 0.58rem;
  width: 100%;
}
.play_banner img{
  width: 100%;
}
.play_index_ticket{
  border-bottom: 1px solid #efefef;
  padding: 0.08rem 0;
  margin-top: 0.1rem;
  background-color: #fff;
}
.play_index_ticket>div{
  position: relative;
  float: left;
  width: 1.57rem;
  height: 0.37rem;
  padding: 0.08rem 0.15rem;
  text-align: center;
  border-right: 1px solid #efefef;
  margin-left: 0.3rem;
  font-size: 0.2rem;
}

.play_index_ticket .play_index_jd{
  border-right: none;
}
.play_index_ticket span{
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  background-color: yellow;
  left: 0;
  top: 0.1rem;
  background:url(../assets/play_index.png);
  background-size: 350%;
  background-position: -0.7rem 0;
}
.play_index_jd span{
  background-position: -0.39rem 0;

}

.play_popular{
  height: 0.44rem;
  padding-top: 0.1rem;
  background-color: #fff;
  width: 100%;
  font-size: 0.14rem;
  overflow-x: auto;
  overflow-y:hidden;
  white-space: nowrap;
  position: relative;
}
.play_popular_img{
  width: 0.44rem;
  height: 0.34rem;
  position: absolute;
  top: 0.05rem;
  left: 0;
}
.play_popular_img img{
  width: 100%
}
.play_popular a{
  color: #333;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  border-right: 1px solid #efefef;
}
.play_popular a:first-of-type{
  margin-left: 0.45rem
}

/*导航*/
.play_nav{
  width: 100%;
  height:2.1rem;
  display: flex;
  background-color: #fff;
  flex-wrap:wrap;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;

}
.play_nav div{
  width: 0.75rem;
  height: 0.71rem;
  /*padding-top: 0.15rem;*/
  margin: auto;
  text-align: center;

}
.play_nav div img{
  width: 0.46rem;
  height: 0.46rem;

}
.play_nav p{
  font-size: 0.12rem;
}
.play_index_topic{
  height: 1.54rem;
}
.play_topic_left{
  width: 1.53rem;
  height: 1.54rem;
  float: left;
}
.play_topic_left img{
  width: 100%;
}
.play_topic_right{
  display: flex;
  flex-wrap:wrap;
}
.play_topic_right img{
  width: 1.11rem;
  height: 0.77rem;
  margin: auto;
}

.play_title{
  height: 0.34rem;
  background-color: #fff;
  text-align: center;
  color: #999;
  margin-top: 0.1rem;
}
.play_product_section{
  background-color: #fff;
}
.play_product_section li{
  padding-left: 0.1rem;
  height: 0.95rem;
  margin-bottom: 0.2rem;
}
.play_product_section_img{
  width: 0.95rem;
  height: 0.95rem;
  float: left;
  background-color: red;
}
.play_product_section_img img{
  width: 100%;
}
.play_product_section_right{
  float: left;
  margin-left: 0.1rem;
  width: 2.52rem;
  height: 0.95rem;
  background-color: #fff;
}
.play_product_section h3{
  font-weight: normal;
  color: #000;
  font-size: 0.16rem;
}
.play_sale{
  color: #099fde;
  font-size: 0.14rem;
  margin: 0.05rem 0;
}
.play_sale span{
  margin-right: 0.1rem;
}
.play_product_section i{
  color: #999;
  font-size: 0.12rem;
  font-style: normal;
}
.play_icon{
  font-size:0.12rem;
  color: #099fde;
  border: 1px solid  #099fde;
  /*border-radius: 5px;*/
  width: 0.5rem;
}
.play_price{
  float: right;
  color: #f40;
  font-size: 0.2rem;
  font-weight: bold;
}
.play_price span{
  color: #999;
  font-size: 0.12rem;
  font-style: normal;
}

.play_getmore{
  margin: 10px;
  background-color: #179fde;
  text-align: center;
  color: #fff;
  width: 3.55rem;
  height: 0.4rem;
  line-height: 0.44rem;
  border-radius: 5px;
}
</style>
