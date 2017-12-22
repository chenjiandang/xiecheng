<template>
  <div id="cards">
     <div id="cards_banner">
      <i id="cards_back">
        <img src="../assets/back.png" alt="">
      </i>
      <i id="listicon"><img src="../assets/三点.png" alt=""></i>
      <img src="../assets/cards_banner.jpg" alt="">
    </div>
    <div id="cards_buy">
      <div id="cards_hd">
        <ul class="cards_type clearFloat">
          <li class="recharge liStyle" >账户充值</li>
          <li class="virtual">电子礼品卡</li>
          <li class="physical">实体礼品卡</li>
        </ul>
        <span class="slide-whitebg"></span>
      </div>
      <div id="cards_bd">
        <div class="cards_rwx">
          <img src="../assets/cards_rwx.jpg" alt="">
          <img src="../assets/cards_rwy.jpg" alt="">
        </div>
        <div class="buycards">购买</div>
        <p class="giftcard-remind">精美卡片配送到家&nbsp;&nbsp;|&nbsp;&nbsp; <span>什么是礼品卡</span></p>

        <div class="cards_theme">
          <span class="cards_theme_img">
            <!-- <img src="../assets/cards.png" alt=""> -->
          </span>
          <b>新品实体主题卡</b>
          <i>经典款</i>
          <i>教师节定制款</i>
        </div>
        
      </div>

  </div>

  <div class="giftcard-account">
    <p >礼品卡余额</p>
    <div class="unlogin">登陆后可查看余额</div>
    <span>领用与查询</span>
    <span>礼品卡订单</span>
  </div>
    <!-- 礼品卡快讯 -->
    <div class="news_list">
      <div class="news_hd">
        <i class="news_left_icon">
        </i>
        <b>礼品卡快讯</b>
        <span>关于扫码刷单返现风险提示通知</span>
        <i class="news_right_icon"></i>
      </div>
      <div class="news_bd">
        <div>
          <img src="../assets/giftcard3-v73.png" alt="">
          <p>礼品卡福袋</p>
        </div>
        <div>
          <img src="../assets/giftcard6-v73.png" alt="">
          <p>兑换券</p>
        </div>
        <div>
          <img src="../assets/giftcard8-v73.png" alt="">
          <p>礼品卡福袋</p>
        </div>
      </div>
    </div>

    <h2>------为你推荐------</h2>
    <div class="imgs">
      
      <img src="../assets/cards_9.jpg" alt="">
      <img src="../assets/cards_10.jpg" alt="">
      <img src="../assets/cards_11.jpg" alt="">
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
<style scoped>
@charset'utf-8';
body{
  background-color: #e6e6e6;
}
#cards_banner{
  height: 1.65rem;
  position: relative;

}
#cards_banner img{
  height: 1.65rem;
}
#cards_banner i{
  width: 0.3rem;
  height: 0.3rem;
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0.1rem;
  border-radius: 50%;
  color: #fff;
  line-height: 0.3rem;
  text-align: center;
  font-style: 20px;
}
#cards_banner i img{
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.05rem;
}
#cards_banner i:first-of-type{
  left: 0.15rem;
}
#cards_banner i:last-of-type{
  right: 0.15rem;
}
/*礼品卡*/
#cards_buy{
  position: relative;
  width: 3.55rem;
  /*height: 2.7rem;*/
  background-color: #fff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 0 0.1rem;

}
.cards_type{
  height: 0.45rem;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: -0.45rem;
  width: 3.55rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: #fff;
  font-size: 0.14rem;
}
.cards_type li{
  float: left;
  text-align: center;
  width: 1.18rem;
  height: 0.45rem;
  line-height: 0.45rem;
  z-index: 3;
  position: relative;
}
.slide-whitebg{
  width: 1.19rem;
  height: 0.5rem;
  background-color: #fff;
  position: absolute;
  top: -0.49rem;
  left: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
  transition:all 1s;
}
.cards_type .liStyle{
  color: #333;
}

.cards_rwx{
  height: 1.16rem;
  padding: 0.13rem 0;
  display: flex;
}
.cards_rwx img{
  width: 1.5rem;
  height: 0.87rem;
  border-radius: 5px;
  margin: auto;
}
.buycards{
  color: #fff;
  background-color: #FF9913;
  text-align: center;
  border-radius: 5px;
  width: 3.25rem;
  height: 0.44rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  line-height: 0.44rem;
}

.giftcard-remind{
  height: 0.44rem;
  font-size: 0.12rem;
  line-height: 0.44rem;
  color: #999;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #efefef;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.giftcard-remind span{
  color: #19a0f0
}
.cards_theme{
  margin-bottom: 0.1rem;
  position: relative;
  font-size: 0.12rem;
  color:  #f9622b;
  padding: 0 0.13rem;
  height: 0.55rem;
  line-height: 0.55rem;
}
.cards_theme img{
  
}
.cards_theme i{
  border:1px solid  #f9622b;
  font-style: normal;
  border-radius: 10px;
  padding:  0.02rem 0.05rem;
  text-align: center;

}
.cards_theme b{
  font-size: 0.14rem;
  margin-left: 0.5rem;
  color: #333;
  font-weight: normal;
  margin-right: 0.2rem;
}
.cards_theme_img{
  width: 0.48rem;
  height: 0.25rem;
  background-color: #f9622b;
  position: absolute;
  top: 0.15rem;
}
.cards_theme_img img{
  width: 100%;
  width: 0.48rem;
  height: 0.25rem;
}
/*礼品卡*/
.giftcard-account{
  height: 1.45rem;
  padding-top: 0.15rem;
  background-color: #fff;
  margin: 0.1rem 0;
  border-radius: 10px;
  width: 3.55rem;
  margin-left: 0.1rem;
}
.giftcard-account p{
  height: 0.3rem;
  padding: 0 0.15rem;
  background-color: #f1f1f1;
  color: #999;
  font-size: 0.14rem;
  line-height: 0.3rem;
}
.unlogin{
  height: 0.55rem;
  padding: 0 0.15rem;
  color: #19a0f0;
  line-height: 0.55rem;
  border-bottom: 1px solid #efefef;
}
.giftcard-account span{
  /*display: inline-block;*/
  float: left;
  width: 1.77rem;
  height: 0.44rem;
  text-align: center;
  color: #333;
  line-height: 0.44rem;
}
.giftcard-account span:first-of-type{
  border-right: 1px solid #efefef;
}

.news_list{
  height: 1.65rem;
  background-color: #fff;
  width: 100%;
  position: relative;
}
.news_hd{
  height: 0.44rem;
  line-height: 0.44rem;
  border-bottom: 1px solid #efefef;
}
.news_hd i{
  position: absolute;
  width: 0.16rem;
  height: 0.16rem;
  top: 0.15rem;
}
.news_left_icon{
  left: 0.1rem;
  background: url(../assets/cards_msg.png);
  background-size: 100%
}

.news_right_icon{
  right: 0.1rem;
  background: url(../assets/向下边框三角.png);
  background-size: 100%
}
.news_hd span{
  color: #999;
  font-size: 0.14rem;
  width: 1.7rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  margin-left: 0.1rem;
  vertical-align: middle;

}
.news_hd b{
  font-size: 0.14rem;
  margin-left: 0.35rem;

}

.news_bd{
  display: flex;
}

.news_bd div{
  margin: auto;
  font-size: 0.14rem;
  color: #333;
  padding-top: 0.3rem;
  width: 1.25rem;
  text-align: center;
}
.news_bd div img{
  width: 0.25rem;
  height: 0.3rem;
}

h2{
  margin-top: 0.1rem;
  height: 0.55rem;
  padding: 0.15rem 0;
  background-color: #fff;
  font-size: 0.16rem;
  font-weight: normal;
  text-align: center;
  color: #333;
}
.imgs{
  background-color: #fff;
}
.imgs img{
  width: 3.67rem;
  height: 1.12rem;
  margin-left: 0.04rem;
}
</style>
