<template>
 <div id="diytour">
    <div id="order_detail">
      <div id="diytour_header">
         <router-link to = "/order_ticket"><span></span></router-link>
        <p class="diytour_header_title">选择附加产品</p>
        <p>3成人 2儿童/12-28</p>
      </div>
      <!-- 附加产品提示 -->
      <div id = "diytour_header_comfirm">
        <span>√</span>已为您重新查询附加产品，请再次核对并选择
      </div>
      <div id="diytour_list">
        <ul>
          <li class="main_list">
            <h2>机票<span>退改签及购票说明</span></h2>
            <ul class="clearFloat">
              <li class="clearFloat">
                <div class="order_detail">
                  <span class = "tour_time">12-28</span>
                  <span class = "tour_nav">国泰港龙航空KA831</span>
                  <span class = "tour_size">333(大)</span>
                  <span class = "tour_kind">经济舱</span>
                  <span class = "tour_detail">详情</span>
                  <b></b>
                  <span class = "tour_distance">2h55m</span>
                </div>
                <div class="order_name">
                  <div class="order_left">
                    <span class = "order_lastTime">08:04</span>
                    <span class = "order_lastPlace">浦东国际机场<b>T2</b></span>
                  </div>
                  <div class="order_center">
                    <span class = "order_line"></span>
                    <span class = "order_setCity">上海</span>
                    <span class = "order_offCity">香港</span>
                  </div>
                  <div class="order_right">
                    <span class = "order_nextTime">11:35</span>
                    <span class = "order_nextPlace">香港国际机场<b>T1</b></span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="main_list" v-for = "item in obj">
            <h3 class="tour_name">{{item.name}}</h3>
            <h4><span class= "family_title">{{item.hotTitle}}</span>{{item.content}}</h4>
            <p class="button">
              <span class = "minus" @click = "musPro(item)">-</span>
              <span class = "num">{{item.num}}</span>
              <span class = "add" @click = "addPro(item)">+</span>
              <!-- <span class = "time">{{item.dateTime}}<b></b></span> -->
            </p>
            <div class="diytour_list_price">
              <p>￥<b class = "singlePrice">{{item.price}}</b>/份</p>
              <p>说明<i></i></p>
            </div>
            <p class="diytour_list_more">更多特色服务(2)<span></span></p>
          </li>
       
        </ul>
      </div>
      <div id="diytour_footer">
        <p class="diytour_footer_box"><span>￥<strong class = "totalMoney">{{total}}</strong></span><b>省<strong>864</strong></b><a href="#">明细</a></p>
        <p class="diytour_footer_next">下一步：<br><span>填写信息</span></p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      obj:[]
    }
  },
  created(){
    this.$http('../../static/diyTour.json').then((res)=>{
      // console.log(res.data.list);
      this.obj = res.data.list;
      // console.log(this.obj);
    });


  },
  computed:{
    total(){
      return this.$store.getters.total;
    }
  },
  methods:{
    addPro(item){
      item.num++;
      this.$store.dispatch('add_Pro',item);
    },
    musPro(item){
      this.$store.dispatch('mus_Pro',item);
      if (item.num >0) {
        item.num--;
      };
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@charset "utf-8";
#order_detail{
  background: #5c5f6b;
}
#diytour_header,#order_ticket_header{
  width: 100%;
  height: .44rem;
  background: #19A0F0;
  text-align: center;
  line-height: .22rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
#diytour_header span,#order_ticket_header span{
  position: relative;
}
#diytour_header span:before,#order_ticket_header span:before{
  content: "";
  width: .08rem;
  height: .08rem;
  position: absolute;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform:rotate(-45deg);
  left: -1.6rem;
  top: .15rem;
}
#diytour_header p,#order_ticket_header p{
  font-size: .12rem;
  color: #fff;
}
#diytour_header .diytour_header_title{
  font-size: .16rem;
}

/*附加产品提示*/
#diytour_header_comfirm{
  width: 100%;
  height: .35rem;
  background: #fffcdf;
  line-height: .35rem;
  color: #666;
  font-size: .14rem;
  position: fixed;
  padding-left: .2rem;
  top: .44rem;
  left: 0;
  z-index: 10;
}
#diytour_header_comfirm span{
  width: .22rem;
  height: .22rem;
  background: #0a0;
  border-radius: 50%;
  /*position: absolute;*/
  font-size: .14rem;
  color: #fff;
  text-align: center;
  line-height: .22rem;
  margin: .05rem .1rem 0 0;
  display: inline-block;
}

/*附加产品列表*/
#diytour_list{
  margin-top: .88rem;
}
#diytour_list .main_list:last-of-type{
  margin-bottom: .6rem;
}
#diytour_list .main_list{
  width: 3.55rem;
  background: #fff;
  margin: .09rem .09rem .14rem .09rem;
  padding-left: .2rem;
  position: relative;
  padding-bottom: .57rem;
}
#diytour_list h2{
  height: .4rem;
  line-height: .4rem;
  font-size: .16rem;
  border-bottom: 1px solid #F8F8F8;
}
#diytour_list h2 span{
  font-size: .14rem;
  float: right;
  color: #19a0f0;
  font-weight: normal;
  margin-right: .2rem;
}
#diytour_list li h3{
  font-size: .16rem;
  height: .4rem;
  line-height: .4rem;
}
#diytour_list li h4{
  font-size: .14rem;
  font-weight: normal;
  margin-top: .1rem;
  width: 2.15rem;
}
.addSpan{
  color: #6289ac;
  font-size: .13rem;
  border: 1px solid #6289ac;
  border-radius: 15px;
}
.button{
  font-size: 0;
  margin-top: .1rem;
}
.button span{
  width: .27rem;
  height: .26rem;
  border: 1px solid #e4e4e4;
  display: inline-block;
  font-size: .25rem;
  line-height: .2rem;
  vertical-align: middle;
}
.button .num{
  font-size: .14rem;
  color: #333;
    line-height: .24rem;
    text-align: center;
}
.minus{
  color: #e4e4e4;
  text-align: center;
}
.add{
  color: #19a0f0;
  text-align: center;
}
.addtime{
  width: 1rem;
  height: .28rem;
  font-size: .12rem;
  line-height: .26rem;
  margin-left: .1rem;
  color:#19a0f0;
  padding-left: .1rem;
  position: relative;
}
.diytour_list_price{
  width: .623rem;
  height: .38rem;
  position: absolute;
  right: .2rem;
  top: .6rem;
  text-align: center;
  /*background: red;*/
}
.diytour_list_price p{
  font-size: .12rem;
  /*padding-top: 0.1px;*/
}
.diytour_list_price p b{
  font-weight: normal;
  color: #ff6913;
}
.diytour_list_price p i{
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid;
  vertical-align: middle;
  margin-left: 0.03rem;
}
.diytour_list_more {
  width: 100%;
  height: .45rem;
  position: absolute;
  bottom: 0;
  line-height: .45rem;
  font-size: .14rem;
  text-align: center;
  left: 0;
  color: #666;
}
.diytour_list_more span:before,#diytour_list .button .time b:before{
  content: "";
  width: .06rem;
  height: .06rem;
  position: absolute;
  border-bottom: #ccc 2px solid;
  border-right: #ccc 2px solid;
  transform:rotate(45deg);
  top: .18rem;
  right: 1.1rem;
}
#diytour_list .button .time b:before{
  top: 0.08rem;
  right: 0.05rem;
}
.count{
  /*position: absolute;*/
  width: 3.25rem;
  height: .38rem;
  background: #f7f8f9;
  line-height: .38rem;
  padding-left: .1rem;
  margin-top: .4rem;
  margin-bottom: -.5rem;
  position: relative;
  
}
.count .button{
  position: absolute;
  right: 0.1rem;
  bottom: 0.0rem;
}

/*订单信息*/
.main_list li{
  width: 100%;
  margin: .15rem .15rem .0rem 0;
  font-size: .12rem;
  color: #666;
  position: relative;
}
.main_list li span{
  margin-right: .03rem;
}
.tour_detail{
  color: #19a0f0;
}
.order_detail b{
  display: inline-block;
  width: 0.01rem;
  height: .1rem;
  font-size: 0;
  background: #ddd;
  vertical-align: middle;
  margin: .05rem 0rem 0 0.1rem ;
}

.order_name{

  margin-top: .05rem;
}
.order_name div{
  float: left;
  text-align: center;
}
.order_center{
  margin: 0.15rem .4rem 0 .4rem;
  position: relative;
}
.order_lastTime,.order_nextTime{
  font-size: .24rem;
}
.order_lastTime,.order_nextTime strong{
  text-decoration: none;
}
.order_lastPlace,.order_nextPlace{
  display: block;
  font-weight: normal;
  color: #999;
}
.order_lastPlace b,.order_nextPlace b{
  font-weight: normal;
}
.order_line{
  display: block;
  width: .7rem;
  height: .01rem;
  background: #b2d4e4;
  position: relative;
  margin-bottom: .08rem;
}
.order_line:before,.order_line:after{
  content: "";
  width: .05rem;
  height: .05rem;
  border: #66ccef 1px solid;
  border-radius: 50%;
  position: absolute;
}
.order_line:before{
  left: -0.03rem;
  top: -0.03rem;
}
.order_line:after{
  right: -0.03rem;
  top: -0.03rem;
}

.order_setCity{
  position: absolute;
  left: -0.1rem;
  font-size: .14rem;
}
.order_offCity{
  position: absolute;
  right: -0.1rem;
  font-size: .14rem;
}


/*页脚*/
#diytour_footer{
  height: .48rem;
  width: 100%;
  bottom: 0;
  position: fixed;
  z-index: 10;
}
#diytour_footer p{
  float: left;
    height: .48rem;
    font-size: .1rem;
  
}
#diytour_footer strong,#diytour_footer b{
  font-weight: normal;
}
.diytour_footer_box{
  width: 1.87rem;
  background: #f9f9f9;
    line-height: .48rem;
}
.diytour_footer_box span{
  color: #ff7d13;
  margin-left: .2rem;
}
.diytour_footer_box b{
  background: #ff9a14;
  color: #fff;
  margin: 0 .1rem 0 .05rem;
  font-size: .1rem;
}
.diytour_footer_box span strong{
  font-size: .16rem;
}
.diytour_footer_box a{
  color: #999;
  font-size: .1rem;
  text-decoration: underline;
}
#diytour_footer .diytour_footer_next {
  width: 1.88rem;
  background: #ff7d13;
  color: #fff;
  font-size: .16rem;
  text-align: center;
  line-height: .2rem;
  padding-top: .05rem;
}
#diytour_footer .diytour_footer_next span{
  font-size: .12rem;

}
</style>
