<template>
  <div id="hotel">
            <!-- 酒店头部 -->
          <div id="hotel_header">
            <i id="hotel_back"></i>
            国内/海外酒店
            <p><span></span>未登录</p>
          </div>
          <!-- 酒店广告栏 -->
          <div id="hotel_banner">
            <img src="../assets/index-hb.jpg" alt="index-hb.jpg">
          </div>
          <!-- 酒店预订 -->
          <div id="hotel_book">
            <ul>
              <li class="hotel_city">
                <div class="hotel_location"> 
                  <img src="../assets/location.jpg" alt="location.jpg">
                </div>
                <p><router-link to="/citys">
                  {{cityName}}</router-link>
                </p>
              </li>
              <li class="hotel_time">
                <p class="hotel_Today">
                  <b>12月12日</b><span>今天</span>
                </p>
                <p class="hotel_totalTime">
                  1晚
                </p>
                <p class="hotel_tomorrow">
                  <b>12月13日</b><span>明天</span>
                </p>
              </li>
              <li class="hotel_mainKey">
                关键字/位置/品牌/酒店名
              </li>
              <li class="hotel_price">
                星级/价格
              </li>
              <li class="hotel_search">
                <p>查询</p>
                <a href="#">查找附近酒店</a>
              </li>
            </ul>
          </div>

          <!-- 我的订单 -->
          <div id="hotel_myOrder">
            <p>我的订单</p>
          </div>
          
          <!-- 酒店底部菜单 -->
          <div id="hotel_menu">
            <ul>
              <li class="hotel_title">
                <span></span>
                <h5>钟点房</h5>
                <p>等？不如躺着</p>
              </li>
              <li class="hotel_kind"><span></span>民宿客栈</li>
              <li class="hotel_kind"><span></span>民宿客栈</li>
              <li class="hotel_kind"><span></span>民宿客栈</li>
              <li class="hotel_kind"><span></span>民宿客栈</li>
            </ul>
          </div>

          <!-- 页脚 -->
          <div id="hotel_footer">
            <img src="../assets/oversea-index.png" alt="oversea-index.png">
          </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      cityName:"北京"
    }
  },
  created(){
    if (localStorage.cityname != "") {

      this.cityName = localStorage.cityname;
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
body{
  background-color: #f5f5f5;
}
a{
  display: block;
  text-decoration: none;
  color: #333;
}
#hotel_header{
  width: 100%;
  height: .44rem;
  background-color: #099fde;
  line-height: .44rem;
  color: #fff;
  padding-left: 1.3rem;
  font-size: .18rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}
#hotel_header i{
  position: absolute;
  left: .3rem;
  top: .15rem;

}
#hotel_header i:before{
  content: "";
  width: .08rem;
  height: .08rem;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  transform:rotate(45deg);
  position: absolute;
  right: 0;
  top:0;
}
#hotel_header p{
  float: right;
  font-size: .14rem;
  margin-right: .2rem;
}
#hotel_header p span{
  width: .21rem;
  height: .25rem;
  display: inline-block;
  /*background-color: red;*/
  vertical-align: middle;
  margin-right: .1rem;
  background: url(../assets/java-index.png) 0 -.29rem;
  background-size: .35rem 3.2rem;
}


/*酒店广告栏*/
#hotel_banner{
  margin-top: .44rem;
}
#hotel_banner img{
  width: 100%;
}

/*酒店预订*/
#hotel_book{
  height: 2.83rem;
  background-color: #fff;
  padding: .08rem .1rem .06rem .1rem;
}


/*酒店预订的目的地城市*/
.hotel_location{
  width: .45rem;
  height: .45rem;
  border: 1px solid #099fde;
  border-radius: .02rem;
  font-size: 0.03rem;
  float: right;
}
.hotel_location img{
  width: .38rem;
  height: .38rem;
  margin-left: .03rem;
  margin-top: .03rem;
}
.hotel_city p{
  width: 2.85rem;
  position: relative;
  height: .5rem;
  line-height: 0.6rem;
  font-size: .2rem;
  border-bottom: 1px solid #ddd;
  -webkit-border-image:url(../assets/下载.gif) 2 stretch;
}
.hotel_city p:before,.hotel_tomorrow:before,.hotel_mainKey:before,.hotel_price:before{
  position: absolute;
  content: '';
  right: .15rem;
  top: 90%;
  margin-top: -0.25rem;
  width: .08rem;
  height: .08rem;
  border-top: 2px solid #ddd;
  border-right:2px solid #ddd;
  transform:rotate(45deg);

}
.hotel_city p:after{
  content: "目的地";
  font-size: .12rem;
  position: absolute;
  top: -0.2rem;
  left: 0;
  color: #b2b2b2;
}

/*酒店预订的时间*/
.hotel_time{
  height: .60rem;
  border-bottom: 1px solid #ddd;
  -webkit-border-image:url(../assets/下载.gif) 2 stretch;
  line-height: 0.7rem;
}
.hotel_time p{
  float: left;
}
.hotel_time b{
  font-size: .2rem;
  font-weight: normal;
  margin-left: .05rem;
}
.hotel_time span{
  font-size: .12rem;
  color: #b2b2b2;
  margin-left: .05rem;
}
.hotel_Today,.hotel_tomorrow{
  position: relative;
}
.hotel_Today:after,.hotel_tomorrow:after{
  content: "入住";
  font-size: .14rem;
  position: absolute;
  top: -0.2rem;
  left: 0.07rem;
  color: #b2b2b2;
}

.hotel_totalTime{
  width: .45rem;
  height: .21rem;
  line-height: .21rem;
  text-align: center;
  border-radius: 10px;
  border:1px solid #e6e8eb;
  font-size: .12rem;
  margin: .15rem 0rem 0 .15rem;

}

.hotel_tomorrow{
  width: 1.6rem;
  margin-left: .1rem;
}
.hotel_tomorrow:after{
  content: "离店";
}
.hotel_tomorrow:before{
  top: 70%;
  right: .1rem;
}

/*酒店关键字*/
.hotel_mainKey,.hotel_price{
  height: .5rem;
  line-height: .25rem;
  color: #bbb;
    border-bottom: 1px solid #ddd;
  -webkit-border-image:url(../assets/下载.gif) 2 stretch;
  font-size: .18rem;
  position: relative;
}
.hotel_price{
  line-height: .5rem;
}

/*酒店查询*/
.hotel_search p{
  width: 2.4rem;
  height: .44rem;
  background-color: #ff9a14;
  line-height: .44rem;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: .2rem;
  float: left;
  margin-top: .1rem;
}
.hotel_search a{
  float: right;
  width: 1rem;
  height: .42rem;
  text-align: center;
  line-height: .42rem;
  color: #26aaf2;
  border: 1px solid #E3E4E8;
  border-radius: 5px;
  font-size: .14rem;
  margin-top: .1rem;
}

/*我的订单*/
#hotel_myOrder{
  height: .7rem;
  padding-top: .13rem;
}
#hotel_myOrder p{
  width: 3.49rem;
  height: .41rem;
  background-color: #fff;
  text-align: center;
  line-height: .41rem;
  color: #26aaf2;
  border-radius: 8px;
  margin: auto;
}

/*酒店底部菜单*/
#hotel_menu{
  height: .8rem;
  background: #fff;
}
#hotel_menu li{
  float: left;
}
#hotel_menu li span{
  float: left;
  width: .24rem;
  height: .24rem;
  /*background: red;*/
}
.hotel_title{
  width: 1.5rem;
  height: .8rem;
  padding-left: .06rem;
}
.hotel_title h5{
  font-weight: normal;
  margin-bottom: .03rem;
  font-size: .14rem;
  margin-top: .2rem;
}
.hotel_title p{
  font-size: .12rem;
  color: #999;
}
.hotel_kind{
  width: 1.1rem;
  height: .39rem;
  line-height: .39rem;
  text-align: center;
  font-size: .13rem;
  border-left: 1px solid #f5f5f5;
}
.hotel_kind span{
  margin-top: .1rem;
  margin-left: .1rem;
}
.hotel_title span{
  background: url(../assets/java-index.png) 0 -1.65rem;
  background-size: .35rem 3.2rem;
  margin-top: .3rem;
  margin-right: .05rem;
}
#hotel_menu li:nth-of-type(2) span{
  background: url(../assets/java-index.png) 0 -1.9rem;
  background-size: .35rem 3.2rem;
}
#hotel_menu li:nth-of-type(3) span{
  background: url(../assets/java-index.png) 0 -2.12rem;
  background-size: .35rem 3.2rem;
}
#hotel_menu li:nth-of-type(4) span{
  background: url(../assets/java-index.png) 0 -2.62rem;
  background-size: .35rem 3.2rem;
}
#hotel_menu li:nth-of-type(5) span{
  background: url(../assets/java-index.png) 0 -2.39rem;
  background-size: .35rem 3.2rem;
}
#hotel_menu li:nth-of-type(2),#hotel_menu li:nth-of-type(3){
  border-bottom: 1px solid #f5f5f5;
}
/*发现特色*/
#hotel_find{
  height: .4rem;
  background-color: #fff;
  font-size: .14rem;
  line-height: 0.4rem;
  position: relative;
  padding-left: .35rem;
}
#hotel_find span{
  position: absolute;
  width: .24rem;
  height: .24rem;
  background:url(../assets/java-index.png) 0 -2.12rem;
  background-size: .35rem 3.2rem;
  top: .1rem;
  left: .1rem;
  /*vertical-align: middle;*/
}

/*页脚*/
#hotel_footer{
  padding:.35rem 0 .45rem 0 ;
}
#hotel_footer img{
  width: 100%;

}
</style>
