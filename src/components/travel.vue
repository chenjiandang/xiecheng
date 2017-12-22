<template>
  <div id="travel">
    <!-- 旅游页头部 -->
      <div id="travel_header">
        <i id="travel_back"></i>
        <div class="travel_header_apply">
          <div class="travel_header_position">
            <span></span>北京
          </div>
          <div class="travel_header_search">
            <span></span>目的地关键字
          </div>
        </div>
      </div>
      <!-- 旅游广告 -->
      <div id="travel_banner">
        <img src="../assets/travel1.jpg" alt="travel1.jpg">
      </div>
      <!-- 高级搜索 -->
      <div id="travel_target">
        <p>
          <span></span>
          <b>高级搜索</b>
          目的地、触发事件、预算、天数
          <i></i>
        </p>
      </div>
      <!-- 导航 -->
      <div id="travel_nav">
        <ul>
          <li><img src="../assets/icon610-index_01.png" alt="icon610-index_01.png">跟团游</li>
          <li><img src="../assets/icon610-index_02.png" alt="icon610-index_02.png">目的地参团</li>
          <li><img src="../assets/icon610-index_03.png" alt="icon610-index_03.png">自由行</li>
          <li><img src="../assets/icon610-index_04.png" alt="icon610-index_04.png">机+酒</li>
          <li><img src="../assets/icon610-index_11.png" alt="icon610-index_01.png">周边游</li>
          <li><img src="../assets/guide2.png" alt="icon610-index_01.png">当地向导</li>
          <li><img src="../assets/icon610-index_06.png" alt="icon610-index_01.png">主体游</li>
          <li><img src="../assets/icon610-index_07.png" alt="icon610-index_01.png">亲子.游学</li>
          <li><img src="../assets/icon610-index_08.png" alt="icon610-index_01.png">高端游</li>
          <li><img src="../assets/icon610-index_15.png" alt="icon610-index_01.png">一日游</li>
        </ul>
      </div>
      <!-- 附近门店 -->
      <div id="travel_closet">
        <span></span>
        <p><b>附近门店</b>好货在身边</p>
      </div>
      <!-- 出行风向标 -->
      <div id="travel_decoration">
        <div class="travel_decoration_title">
          出行风向标
          <img src="../assets/pic_abtesting_new.png" alt="pic_abtesting_new.png">
        </div>
        <div class="travel_decoration_content">
          <ul>
            <li><img src="../assets/decoration1.jpg" alt=""></li>
            <li><img src="../assets/decoration2.jpg" alt=""></li>
            <li><img src="../assets/decoration3.jpg" alt=""></li>
            <li><img src="../assets/decoration4.jpg" alt=""></li>
            <li><img src="../assets/decoration5.jpg" alt=""></li>
            <li><img src="../assets/decoration6.jpg" alt=""></li>
          </ul>
        </div>
      </div>
      <!-- 特卖汇 -->
      <div id="travel_hot">
        <ul>
          <li><img src="../assets/decoration6.jpg" alt="decoration6.jpg"></li>
          <li><img src="../assets/decoration7.jpg" alt="decoration6.jpg"></li>
          <li><img src="../assets/decoration8.jpg" alt="decoration6.jpg"></li>
          <li><img src="../assets/decoration10.jpg" alt="decoration6.jpg"></li>
          <li><img src="../assets/decoration9.jpg" alt="decoration6.jpg"></li>
        </ul>
      </div>
      <!-- 我的旅行偏好 -->
      <div id="travel_hobby">
        <p class="travel_hobby_title">
          <img src="../assets/pen.png" alt="pen.png">
          我的旅行偏好
        </p>
        <div class="travel_hobby_kind" @click = "choice">
          <ul>
            <li class="addSty1">兴趣</li>
            <li>目的地</li>
            <li>事件</li>
          </ul>
          <span></span>
        </div>
        <!-- 旅行导航 -->
        <div class="travel_hobby_nav">
          <div class="hobby">
              <ul >
                <li v-for = "(item, index) in nav.Topics">{{nav.Topics[index].Key}}</li>
              </ul>
          </div>
          <div class="Destinations" style="display:none">
            
            <ul >
               <li v-for = "(item, index) in nav.Destinations">{{nav.Destinations[index].Key}}</li>
            </ul>
          </div>
          <div class="Times" style="display:none">
            <ul class="month">
               <li v-for = "(item, index) in timeDate.DateTab">{{timeDate.DateTab[index].Key}}</li>
            </ul>
            <ul class="day">
               <li v-for = "(item, index) in timeDate.TravelDays">{{timeDate.TravelDays[index].Key}}</li>
            </ul>
          </div>
        </div>
      </div>  
      <!-- 旅行点点以及介绍 -->
      <div id="travel_hobby_place" class="clearFloat">
       
          <ul>

            <li v-for = "(item,index) in obj"><router-link to="/order_ticket">
              <div class="travel_place_img">
                <img :src="obj[index].LineImgURL" alt="place1.jpg">
              </div>
              <img src="../assets/picbg.png" alt="picbg.png" class="picbg">
              <p class="travel_place_name">{{obj[index].LineName}}</p>
              <p class="travel_place_bottom">
                <span></span>
                {{obj[index].Advisedstartday}}&nbsp;&nbsp;降1278元
              </p>
              <div class="travel_place_detail">
                <ul>
            
                  <li v-for = "(item1,index1) in obj[index].LinePOIInfos">
                      <b>{{obj[index].LinePOIInfos[index1].POIName}}</b><span>{{obj[index].LinePOIInfos[index1].TopName}}</span>
                  </li>
                  
                </ul>
              </div></router-link>
            </li>
        </ul>
        </script>
      
      </div>

      <!-- 限时特卖 -->
      <div id="travel_flash" class="clearFloat">
        <h2><b>限时</b><span>特卖</span></h2>
        <ul>
          <li v-for = "(item, index) in obj2">
            <img :src="obj2[index].CoverImageUrl" alt="">
            <p class="travel_flash_content">{{obj2[index].ProductName}}</p>
            <p class="travel_flash_price">{{obj2[index].Seat}}<b></b><span>￥{{obj2[index].SalesPrice}}起</span></p>
          </li>
       
        </ul>
      </div>

      <!-- 旅游尾部 -->
      <div id="travel_footer">
        <span></span>
        <ul>
          <li><b></b>透明团(仅跟团游)</li>
          <li><b></b>透明团(仅跟团游)</li>
          <li><b></b>透明团(仅跟团游)</li>
          <li><b></b>透明团(仅跟团游)</li>
          <li><b></b>透明团(仅跟团游)</li>
          <li><b></b>透明团(仅跟团游)</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data(){
    return {
      obj:[],
      nav:[],
      timeDate:[],
      obj2:[]
    }
  },
  methods:{
    choice:function(){
        $('.travel_hobby_kind').on('click', 'li', function(e){
        $(this).addClass('addSty1').siblings('li').removeClass('addSty1');
        $('.travel_hobby_kind').children('span')[0].style.left = e.target.offsetLeft + "px";
        var index = $(this).index();
        $('.travel_hobby_nav').children('div').eq(index).show().siblings('div').hide();
      })
    }
  },
  created(){
    this.$http('../../static/HandByHandTrip.json').then((response)=>{
      var obj = response.data.Data.Lines;

      this.obj = obj;
      this.nav = response.data.Data.TabInfo;
      this.timeDate = response.data.Data.TabInfo.Times;
      console.log(this.timeDate);
      console.log(this.obj);
      console.log(this.nav);
     
    });

    this.$http('../../static/travel_ProductList.json').then((response2)=>{
      this.obj2 = response2.data.BarginProductList;
      console.log(this.obj2);
    })
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@charset "utf-8";
body{
  background-color: #f5f5f5;
}
a{
  display: block;
  color: #333;
}
#travel_header{
  width: 100%;
  height: .44rem;
  background-color: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
#travel_header i{
  position: absolute;
  left: .15rem;
  top: .15rem;
}
#travel_header i:before{
  content: "";
  position: absolute;
  width: 0.08rem;
  height: 0.08rem;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform:rotate(45deg);

}

.travel_header_apply{
  width: 2.97rem;
  height: .38rem;
  background-color: #fff;
  margin-left: .4rem;
  margin-top: .03rem;
  line-height: .38rem;
}

.travel_header_apply div{
  float: left;
}
.travel_header_position{
  width: .9rem;
  color: #19a0f0;
  font-size: .14rem;
  position: relative;
  text-align: center;
  border-right: 1px solid #ddd;
}
.travel_header_position span{
  position: absolute;
  width: .12rem;
  height: .16rem;
  background: url(../assets/travel2.png) -.642rem -1.04rem;
  background-size: 2.8rem 2.8rem;
  left: .1rem;
  top: .12rem;
}
.travel_header_search{
  position: relative;
  padding-left: .4rem;
  color: #999;
}
.travel_header_search span{
  width: .19rem;
  height: .19rem;
  position: absolute;
  background: url(../assets/travel2.png) -2.56rem -1.79rem;
  background-size: 2.8rem 2.8rem;
    left: .15rem;
  top: .12rem;
}
/*旅游广告*/
#travel_banner img{
  width: 100%;
}
/*改机搜索*/
#travel_target{
  height: .4rem;
  background-color: #dcf6ff;
  color: #666;
  position: relative;
  line-height: .37rem;
  font-size: .12rem;
}
#travel_target p{
  width: 3.55rem;
  margin-left: .1rem;
  position: relative;
}
#travel_target span{
  position: absolute;
  width: .18rem;
  height: .18rem;
  background: url(../assets/travel2.png) -2.57rem -1.24rem;
  background-size: 2.8rem 2.8rem;
  left: 0.1rem;
  top: .1rem;
  vertical-align: middle;
}
#travel_target b{
  font-size: .16rem;
  margin-left: .35rem;
  margin-right: .05rem;
}
#travel_target i:before{
  content: "";
  position: absolute;
  width: 0.08rem;
  height: 0.08rem;
  border-top: #19a0f0 solid 1px;
  border-right: #19a0f0 solid 1px;
  transform:rotate(45deg);
  right: .1rem;
  top: .15rem;
}

/*旅游导航*/
#travel_nav{
  height: 1.87rem;
  background: #fff;
}
#travel_nav ul,.travel_hobby_nav ul,.travel_place_detail ul,#travel_flash ul{
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
}
#travel_nav li{
  width: .75rem;
  height: .74rem;
  font-size: .14rem;
  text-align: center;
  margin-top: .1rem;
}
#travel_nav li img{
  width: .46rem;
  height: .46rem;
  display: block;
  margin-left: .13rem;
  margin-bottom: .05rem;
}

/*附近门店*/
#travel_closet{
  width: 3.61rem;
  height: .56rem;
  background: #fff;
  margin: .1rem .07rem;
  line-height: .56rem;
  position: relative;
  padding-left: .5rem;
}
#travel_closet span{
  position: absolute;
  width: .34rem;
  height: .3rem;
  background: url(../assets/entrance.png) no-repeat;
  background-size: .3rem .9rem;
  left: .1rem;
  top: .15rem;
}
#travel_closet p{
  width: 3.16rem;
  font-size: .12rem;
  color: #888;
  position: relative;
}
#travel_closet p b{
  margin-right: .1rem;
  font-size: .14rem;
  font-weight: normal;
  color: #000;
}
#travel_closet p:after{
  content: "";
  position: absolute;
  width: .08rem;
  height: .08rem;
  border-top: 1px solid #909090;
  border-right: 1px solid #909090;
  transform:rotate(45deg);
  right: 0.3rem;
  top: 0.24rem;
}

/*出行风向标*/
#travel_decoration{
  height: 1rem;
  background: #fff;
  padding-top: 0.1px;
  border-bottom: 1px solid #d4d4d4;
}
.travel_decoration_title{
  width: .24rem;
  background-color: #009ee1;
  color: #fff;
  text-align: center;
  font-size: .13rem;
  height: 0.9rem;
  padding-top: .08rem;
  position: relative;
  float: left;
}
.travel_decoration_title img{
  position: absolute;
  width: .26rem;
  height: .11rem;
  top: 0;
  right: -.2rem;
}
.travel_decoration_content{
  width: 3.51rem;
  height: 1rem;
  position: relative;
  overflow: auto;
}
.travel_decoration_content ul{
  width: 5rem;
  margin: .15rem .1rem  .15rem 0;
  position: absolute;
}
.travel_decoration_content li{
  float: left;
  margin-left: .1rem;
}
.travel_decoration_content img{
  width: .72rem;
  height: .72rem;
  border-radius: 10px;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
}
/*特卖汇*/
#travel_hot{
  height: 2.63rem;
  font-size: 0;
  margin-bottom: .1rem;
}
#travel_hot li img{
  width: 100%;
}
#travel_hot li{
  width: 1.87rem;
  float: left;
  
}
#travel_hot li:first-of-type,#travel_hot li:nth-of-type(2),#travel_hot li:nth-of-type(4){
  border-right: 1px solid #d4d4d4;
}
#travel_hot li:nth-of-type(3),#travel_hot li:nth-of-type(4),#travel_hot li:nth-of-type(5){
  border-top:1px solid #d4d4d4; 
}

/*我的旅行偏好*/
#travel_hobby{
  background-color: #fff;
}
.travel_hobby_title{
  height: .31rem;
  background-color: #f7f7f7;
  text-align: center;
  line-height: .31rem;
  border-top: #ededed solid 2px;
}
.travel_hobby_title img{
  width: .15rem;
  height: .15rem;
  font-weight: bold;
}
.travel_hobby_kind{
  height: .38rem;
  font-size: .16rem;
  line-height: .38rem;
  position: relative;
    border-top: #ededed solid 1px;
}
.travel_hobby_kind li{
  width: 1.248rem;
  float: left;
  text-align: center;
  z-index: 2;
}
.travel_hobby_kind span{
  width: 1.248rem;
  height: .38rem;
  position: absolute;
  border-bottom: 2px solid #19a0f0;
  left: 0;
}
.addSty1{
  color: #19a0f0;
}
/*旅游偏好导航*/
.travel_hobby_nav{
  width: 3.65rem;
  height: .66rem;
  margin: .1rem 0.05rem 0.05rem 0.05rem;
}
.travel_hobby_nav li{
  width: .87rem;
  height: .28rem;
  font-size: .12rem;
  line-height: .28rem;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-bottom: .07rem;
  color: #666;
}

/*旅行点点以及介绍*/
#travel_hobby_place li{
  /*height: 2.18rem;*/
  margin-bottom: .05rem;
  position: relative;
  background-color: #fff;
}
.travel_place_img img{
  width: 100%;
}
.picbg{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.travel_place_name{
  position: absolute;
  z-index: 3;
  top: 30%;
  color: #fff;
  left: 40%;
  font-size: .24rem;

}
.travel_place_bottom{
  width: 100%;
  height: .24rem;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 0.53rem;
  z-index: 4;
  text-align: center;
  font-size: .12rem;
  color:rgba(255,255,255,0.5);
  line-height: .24rem;
}
.travel_place_bottom span{
  width: .11rem;
  height: .11rem;
  display: inline-block;
  background: url(../assets/pan.png);
  background-size: 1.53rem 1.05rem;
  vertical-align: middle;

}
.travel_place_detail li{
  width: 1.2rem;
  height: 0.19rem;
  font-size: .12rem;
  text-align: center;
}
.travel_place_detail li b{
  width: .8rem;
  height: .19rem;
  display: inline-block;
  white-space: nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  font-weight: normal;
  vertical-align: middle;
}
.travel_place_detail li span{
  width: .3rem;
  height: .16rem;
  display: inline-block;
  border: 1px solid #ccc;
  color: #999;
  border-radius: 3px;
  vertical-align: middle;
  margin-left: .8px;
}

/*限时特卖*/
#travel_flash{
  background-color: #fff;
  width: 100%;
}
#travel_flash h2{
  height: .38rem;
  padding-top: .1rem;
  font-size: .16rem;
  padding-left: .1rem;
}
#travel_flash h2 span{
  display: inline-block;
  margin-left: .05rem;
  width: .38rem;
  height: .2rem;
  background-color: #ff4e4e;
  color: #fff;
  text-align: center;
  line-height: .2rem;
}
#travel_flash li{
  width: 1.74rem;
  height: 1.63rem;
  margin-bottom: .1rem;
}
#travel_flash li img{
  width: 100%;
}
.travel_flash_content{
  width: 1.74rem;
  height: .36rem;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: .12rem;
  line-height: 0.18rem;
}
.travel_flash_price{
  height: .24rem;
  color: #888;
  font-size: .12rem;
}
.travel_flash_price b,.travel_flash_price span{
  float: right;
  vertical-align: middle;
}
.travel_flash_price span{
  color: #ff7d13;
  font-size: .14rem;
  margin-right: .04rem;
}

/*旅游尾部*/
#travel_footer{
  height: 0.9rem;
  padding-top:.1rem;
  border-top: 1px solid #d4d4d4;
}

/*旅游尾部*/
#travel_footer{
  height: .9rem;
  padding-top:.1rem;
  border-top: 1px solid #d4d4d4;
  /*margin-bottom: .3rem;*/
}
#travel_footer span{
  float: left;
  width: .7rem;
  height: .6rem;
  background: url(../assets/six.png);
  background-size: 1rem 1rem;
  margin:.06rem 0.05rem 0 0.35rem;
}
#travel_footer ul{
  width: 2.3rem;
  float: left;
  height: .6rem;
  margin-top: .03rem;
}
#travel_footer li{
  width: 1.15rem;
  height: .18rem;
  font-size: .12rem;
  float: left;
}
#travel_footer li b{
  display: inline-block;
  width: .1rem;
  height: .2rem;
  background: url(../assets/six.png) no-repeat 0 -.92rem;
  background-size: 1rem 1rem;
  vertical-align: middle;
  margin-top: .1rem;
  margin-left: .1rem;
}
.day li{
  width: .5rem;
}
</style>
