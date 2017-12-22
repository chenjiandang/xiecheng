<template>
  <div id="app">
    <router-view/>
    <!-- 页脚 -->
    <div id="footer" @click = "jump">

        <router-link to="home">
          <b style = "display:inline"><img class="home" src="./assets/home2.png" alt=""></b>
          <i style = "display:none"><img class="home" src="./assets/home.png" alt=""></i>
          首页
        </router-link>
    
        <router-link to="xingcheng">
          <b><img class="date_img" src="./assets/date2.png" alt=""></b>
          <i><img class="date_img" src="./assets/date.png" alt=""></i>
          行程
        </router-link>
    
        <router-link to="service">
          <b><img class="kefu_img" src="./assets/kefu2.png" alt=""></b>
          <i><img class="kefu_img" src="./assets/kefu.png" alt=""></i>
          客服
        </router-link>
    
        <router-link to="me">
          <b><img class = "me_img" src="./assets/my2.png" alt=""></b>
          <i><img class = "me_img" src="./assets/my.png" alt=""></i>
          我的
        </router-link>
    
    </div> 
  </div>
  
</template>

<script>
export default {
  // name: 'app',
  methods:{
    jump:function(e){
      // console.log(e);
      $('#footer').on('click','a',function(){
          $(this).children('b').show().end().siblings('a').children('b').hide();
          $(this).children('i').hide().end().siblings('a').children('i').show();
        })
    }
  }
}
</script>

<style>
@charset 'utf-8';
/*基本样式*/
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
html{
  font-size: 100px;
}
body{
  font-size: 16px;
  background-color: #f2f2f2;
}
.clearFloat::after{
  content: '';
  display: block;
  clear: both;
}

ol,li,ul{
    list-style: none;
}

/*#me{
  display: none;
}*/
/*主要样式*/
#home_title{
  width: 100%;
  height: .42rem;
  background-color: #F6F6F9;
  /*background-color: red;*/
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
#home_title input{
  width: 3.1rem;
  height: .24rem;
  border: 1px solid #999;
  font-size: .12rem;
  color: #666;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  border-radius: 5px;
  padding-left: .25rem;
  margin-top: .07rem;
  margin-left: .1rem;
}
.search{
  position: absolute;
  width: .15rem;
  height: .15rem;
  background: red;
  background: url(./assets/search.png) no-repeat;
  background-size: 100%;
  top: .12rem;
  left: .18rem; 
}
.home_head_right{
  float: right;
  width: 0.22rem;
  height: 0.22rem;
  background: url(./assets/me.png) ;
  background-position:0 -1.2rem;
  background-size: 220%;
  margin: 0.1rem;
}

/*广告条*/
#home_banner{
  margin-top: 0.42rem;
  font-size: 0;
}
#home_banner img{
  width: 100%;
}
/*主页导航*/
#home_nav{
  height: 3.85rem;

  padding: .04rem;
}
#home_nav div{
  height: .9rem;
  margin-bottom: .04rem;
  border-radius: 5px;
}
#home_nav li{
  float: left;
  font-size: .14rem;
  color: #fff;
  text-align: center;
  text-shadow:0 2px 1px rgba(0,0,0,.2);
}
.hotel{
  background: #ff697a;
}
.ticket{
  background: #3d98ff;
}
.tour{
  background: #44c522;
}
.cards{
  background:#fc9720;
}
.listName{
  width: 1.22rem;
  height: .9rem;
  
  padding-top: .15rem;
}
.listName span{
  display: block;
  width: .43rem;
  height: .43rem;
  background: skyblue;
  margin:0 auto;
  margin-top: .05rem;
}
.hotel .listName span{
  background: url(./assets/home_header.png) 0 -1.3rem;
  background-size: 1.04rem 3.25rem;
}
.ticket .listName span{
  background: url(./assets/home_header.png) no-repeat 0 -2.88rem;
  background-size: 1.04rem 3.25rem;
}
.tour .listName span{
  background: url(./assets/home_header.png) 0 -1.83rem;
  background-size: 1.04rem 3.25rem;
}
.detail{
  width: 1.218rem;
  height: .45rem;
  line-height: .45rem;
  border-left: 1px solid #fff;
}
.detail:nth-of-type(2),.detail:nth-of-type(3),.cards .detail:first-of-type{
  border-bottom: 1px solid #fff;
}


/*列表导航进入*/
#subNav_enter{
  height: 1.82rem;
  margin: 0 0.04rem;
  /*background: #fff;*/
  margin-bottom: 0.1rem;
  border-radius: 5px;
}
#subNav_enter ul{
  display: flex;
  justify-content:space-between;
  flex-wrap:wrap;
}
#subNav_enter li{
  width: .9rem;
  height: .6rem;
  text-align: center;
  padding-top: 0.1px;
  background: #fff;
  margin-bottom: .02rem;
  font-size: .12rem;
}
#subNav_enter li span{
  width: .2rem;
  height: .2rem;
  background: red;
  display: block;
  margin: 0 auto;
  margin-top: .1rem;
  margin-bottom: .05rem;
}
#subNav_enter li:first-of-type span{
  background: url(./assets/nav.png) 0 -.81rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(2) span{
  background: url(./assets/nav.png) 0 -2.935rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(3) span{
  background: url(./assets/nav.png) 0 -1.2rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(4) span{
  background: url(./assets/nav.png) 0 -1.38rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(5) span{
  background: url(./assets/nav.png) 0 -1.6rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(6) span{
  background: url(./assets/nav.png) 0 -1.79rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(7) span{
  background: url(./assets/nav.png) 0 -2rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(8) span{
  background: url(./assets/nav.png) 0 -2.2rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(9) span{
  background: url(./assets/nav.png) 0 -0.2rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(10) span{
  background: url(./assets/nav.png) 0 -2.62rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(11) span{
  background: url(./assets/nav.png) 0 -.39rem;
  background-size: .2rem 3.15rem;
}
#subNav_enter li:nth-of-type(12) span{
  background: url(./assets/nav.png) 0 -0.6rem;
  background-size: .2rem 3.15rem;
}

/*特卖汇*/
#favourable{
  height: 2.63rem;
  background-color: #fff;
  margin-top: .1rem;
  margin-bottom: 0.1rem;
}
.section_title{
  height: .44rem;
  background:#fff;
}
.section_title span{
  width: 1rem;
  height: .19rem;
  background:url(./assets/favorable.png) no-repeat;
  background-size: .79rem .575rem;
  margin-left: .1rem;
  margin-top: .15rem;
  float: left;
}
.section_title a{
  float: right;
  width: 1.02rem;
  height: .2rem;
  background: linear-gradient(to right,#ff4e63,#ff6cc9);
  font-size: .1rem;
  color: #fff;
  line-height: .19rem;
  border-radius: 10px;
  text-align: center;
  margin-right: .1rem;
  margin-top: .13rem;
}
.hotTour li{

  background-color: #f9f9f9;
  float: left;
  width: .83rem;
  height: 1.12rem;
  margin-left: .1rem;
}
.hotTour li:first-of-type{
  width: 1.775rem;
  height: 2.05rem;
  font-size: .14rem;
  margin-left: 0;
}
.hotTour li:first-of-type img{
  width: 100%;
}
.hotTour_content{
  height: .52rem;
  padding: .08rem;
  /*white-space: nowrap;*/
  overflow-y: hidden;
  text-overflow:ellipsis;
  line-height: .21rem;
}
.hotTour_price{
  color: #ff495e;
  font-size: .16rem;
  font-weight: bold;
  float: left;
  margin-left: .07rem;
}
.hotTour_price b{
  font-size: .12rem;
}
.hotTour li:first-of-type a{
  float: left;
  margin-left: .07rem;
  background: #fd3a51;
  width: .57rem;
  height: .14rem;
  border-radius: 15px;
  font-size: .1rem;
  text-align: center;
  line-height: .14rem;
  color: #fff;
  margin-top: .05rem;

}
.hotTour li:nth-of-type(2) {
  width: 1.77rem;
  height: .88rem;
  margin-bottom: .1rem;
  position: relative;
}
.hotTour li:nth-of-type(2) p{
  font-size: .12rem;
  margin: .05rem 0 0 .1rem;
}
.hotTour li:nth-of-type(2) p:first-of-type{
  color: #fd3a51;
  margin-top: .1rem;
}
.hotTour li:nth-of-type(2) img{
  width: .54rem;
  height: .71rem;
  position: absolute;
  bottom: 0;
  right: 0;

}
.hotTour li:nth-of-type(3),.hotTour li:nth-of-type(4){
  height: 1.06rem;
  padding: .1rem 0 0 .1rem;
}
.hotTour li:nth-of-type(3) p{
  color: #6aabff;
  font-size: .13rem;
}
.hotTour li:nth-of-type(4) p{
  color: #53ca72;
  font-size: .13rem;
}
.hotTour li:nth-of-type(3) p span,.hotTour li:nth-of-type(4) p span{
  color: #333;
}
.hotTour li:nth-of-type(3) img,.hotTour li:nth-of-type(4)  img{
  width: .5rem;
  height: .35rem;
  margin-top: .1rem;
  margin-left: .05rem;
}


/*********************************************行程*********************************************/

#xingcheng{
  width: 100%;
  background-color: #fff;
  position: relative;
  color: #333;
  /*display: none;*/
}
.xingcheng_head{
  border-bottom: 1px solid #efefef;
  height: 0.44rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
}
.xingcheng_head span{
  width: 0.25rem;
  height: 0.25rem;
  background-color: blue;
  margin-top: 0.02rem;
  margin-top: 0.1rem;
}
.xingcheng_head span:first-of-type{
  float: left;
  margin-left: 0.1rem;
  background:url(./assets/三条杠.png);
  background-size: 100%;
}
.xingcheng_head span:last-of-type{
  float: right;
  margin-right: 0.1rem;
  background:url(./assets/xc_title2.png);
  background-size: 100%;
}

.xc_find{
  height: 0.45rem;
  background-color: #fff;
  line-height: 0.45rem;
  text-align:center;
}
.xc_find span{
  color: #fc9720;
  margin-right: 0.05rem;
}
.xc_tuij{
  height: 1.1rem;
  width: 100%;
  padding: 0.1rem;
  border-bottom: 1px solid #efefef;
  
}
.xc_tuij_left{
  width: 1.87rem;
  height: 0.9rem;
  float: left;
  color: #333;  
}
.xc_tuij_left h5{
  font-size: 0.14rem;
  margin-bottom: 0.1rem;
}
.xc_tuij_left > div{
  color: #999;
  font-size: 0.12rem;
  margin-top: 0.05rem;
}
.xc_tuij_right{
  float: right;
  width: 1.3rem;
  height: 0.9rem;
}
.xc_tuij_right img{
  width: 100%;
  height: 0.8rem;
}

/*边走边播*/
.xc_hot_title {
  /*text-align: center;*/
  margin :0.2rem 0  0.1rem 0;
  font-size: 0.14rem;
  font-weight: bold;
  height: 0.25rem;
  /*line-height: 0.4rem;*/

}
.xc_hot_title span{
  float: left;
  height: 0.2rem;
  font-size: 0.14rem;
  color: white;
  background-color: #fc9720;
  padding:0 0.05rem;
  border-radius: 3px;
  margin-left: 0.6rem;
  margin-right: 0.1rem;
}
.xc_hot_cnt{
  height: 2rem;
  display: flex;
  border-bottom: 1px solid #efefef;
  margin-bottom: 0.2rem;
}
.xc_hot_cnt div{
  height: 2rem;
  width: 1.7rem;
  margin: auto;
}
.xc_hot_cnt div img{
  height: 1.5rem;
  width: 1.7rem;
}
.hot_subtl{
  font-size: 0.14rem;
}
.hot_user {

  font-size: 0.12rem;
  color: #999;
}
.hot_user span{
  float: right;

}

#xingcheng h6{
  text-align: center;
  font-size: 0.16rem;
  margin-bottom: 0.1rem;
}

/**************************************************我的************************************/
.me_head{
  color:white;
  height: 1.56rem;
  background:url(./assets/me_head_bg.jpg) no-repeat ;
  background-size: 100%;
  text-align: center;
}
#me_btnBack,#me_btnMail{
  width: 0.22rem;
  height: 0.22rem;
  background-color: #fff;
  background:url(./assets/me.png);

}
#me_btnBack{
  float: left;
  background-position:0 -0.21rem;
  background-size: 220%;
  margin: 0.15rem;
  
}
#me_btnMail{
  float: right;
  background-position:-0.27rem -0.97rem;
  background-size: 220%;
  margin: 0.15rem;
}

h2{
  font-size: 0.18rem;
  font-weight: normal;
}

.login_box button{
  width: 1.2rem;
  height: 0.36rem;
  line-height: 0.36rem;
  color: #fff;
  border-radius: 50px;
  font-size: 0.16rem;
  border:none;
  background-color: #ff9a14;
  margin-top: 0.18rem;
  margin-right: 0.3rem;
}
#me_login{
  margin-left: 0.3rem;
}

.login_box .login_button_style{
  border: 1px solid rgba(255,255,255,0.5);
  background-color: rgba(255,255,255,.15);
}

/*錢包*/
.wallet{
  color: #999;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.wallet_icon{
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  background:url(./assets/me.png) 0 -0.4rem;
  background-size: 220%;
  top: 0.1rem;
  left: 0.2rem;
}
.wallet p{
  color: #333;
}
.wallet div{
  margin-left: 0.4rem;
  padding: 0.1rem;
}
.wallet span {
  font-size: 0.12rem;
  margin-right: 0.05rem;
}

.youhui{
  list-style: none;
  background-color: #fff;
}
.youhui li{
  float: left;
  position: relative;
  width: 1.24rem;
  height: 0.63rem;
  border-right: 1px solid #efefef;
  text-align: center;
  padding-top: 0.15rem;
}
.youhui i{
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  top: 0.2rem;
  left: 0.25rem;
  background-color: red;
  background:url(./assets/me.png);
  background-size: 220%;
}
.youhui .first_i{
  background-position: 0 -0.63rem;
}
.youhui .center_i{
  background-position: 0 -1.1rem;
}
.youhui .last_i{
  background-position: -0.21rem -1.5rem;
}
.youhui p{
  margin-left: 0.2rem;
  color: #333;
}
.youhui span{
  font-size: 0.12rem;
  color: #999;
}

.myList{
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
  background-color: #fff;
  list-style: none;
  color: #333;
}
.myList li{
  height: 0.49rem;
  border-bottom:  1px solid #efefef;
  padding-left: 0.2rem;
  line-height: 0.49rem;
  position: relative;
}
.myList span ,.myList b{
  float: right;
  font-size: 0.12rem;
  color: #999;
  margin-right: 0.07rem;

}



.home_remen{
  padding-bottom: 0.6rem;
  background-color: #fff;

}

.home_big_img img{
  width: 1.87rem;
  height: 1.29rem;
  display: block;
  float: left;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;

}
.home_small_img img{
  width: 1.87rem;
  height: 0.79rem;
  float: left;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

/*退出*/
.exit{
  height: 0.4rem;
  background-color: #fff;
  color: #333;
  line-height: 0.4rem;
  text-align: center;
  margin-top: 0.1rem;
  margin-bottom: 0.7rem;
}

#footer{

  height: 0.6rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  padding-top: 0.05rem;
  position: fixed;
  bottom: 0px;
  left: 0;


}

#footer img{
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.3rem;
}
#footer b{
  display: none;
}
#footer a{
  color: #333;
  display: block;
  width: 0.9rem;
  height: 0.6rem;
  margin: auto;
  line-height: 0.3rem;
  color: #999;
  font-size: 0.12rem;
  text-align: center;
}


</style>
