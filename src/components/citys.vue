<template>
    <div id="city">
    <!-- 头部 -->
    <div id="city_header">
      <span></span>
        <p class="order_ticket_header_title">选择城市</p>
    </div>
    <div id="city_search">
      <input type="text" value="全球城市">
    </div>
    <div id="city_kind">
      <a href="#">国内城市</a>
      <a href="#">国际城市</a>
    </div>
    <!-- 城市 -->
    <div id="city_citys">
      <div class="hot_city">
        <p>热门城市</p>
        <ul>
          <li v-for = "(item, index) in hotCity"><router-link to="/hotel">{{hotCity[index].name}}</router-link></li>
    <!--       <li v-for = "(item, index) in hotCity">{{hotCity[index].name}}</li> -->
        </ul>
      </div>
      <div class="code_city">
        <ul>
          <div class="code" v-for = "(item, index) in codeName">
            <p>{{codeName[index].initial}}<span></span><b></b></p>
            <ul class="detaiCity">
              <li v-for = "(item1, index1) in codeName[index].data"><router-link to="/hotel">{{codeName[index].data[index1].name}}</router-link></li>
             <!--  <li v-for = "(item1, index1) in codeName[index].data">{{codeName[index].data[index1].name}}</li> -->
              
            </ul>
          </div>
         
        </ul>
      </div>
      <div class="choice_code">
        <span class = 'hot'>热门</span>
        <ul>
          <li v-for = "(item, index) in codeName">{{codeName[index].initial}}</li>
        
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      codeName:[],
      hotCity:[],
      cityName:'北京'
    }
  },
  created(){
    this.$http('../../static/allCity.json').then((res)=>{
      // console.log(res.data.DepartureCityList);
      this.codeName = res.data.DepartureCityList;
      this.hotCity = res.data.HotDepartureCityList;
    });
  },
  mounted(){
    var h = 30;
  
    $('.code_city').on('click','p',function(e){
      var show = $(this).siblings('ul').css('display');
      var index = $(this).index();
      // console.log(index);
      if (index == 0) {
        $('#city_citys').scrollTop(308);
        // console.log(123);
      } else {
        for(var n=0;n<index;n++){
          h+=30 * n;
        }
        // console.log(h);
        $('#city_citys').scrollTop(308+h);
      }
      if (show == "none") {

        $(this).siblings('ul').show().end().parent().siblings('li').children('ul').hide();
        $(this).children('b').show().siblings('span').hide();
        $(this).parent().siblings('li').children('p').children('b').hide().siblings('span').show();
      } else {
        $(this).siblings('ul').hide();
        $(this).children('span').show().siblings('b').hide();
      }
      // console.log($('#city_citys').scrollTop());
    })

    $('.choice_code').on('click','li',function(){
      var index = $(this).index();
      // console.log(index);
      $('.code').eq(index).children('ul').show().end().siblings('li').children('ul').hide();
        if (index == 0) {
        $('#city_citys').scrollTop(308);
        // console.log(123);
        } else {
          for(var n=0;n<index;n++){
            h+=30 * n;
          }
          // console.log(h);
          $('#city_citys').scrollTop(308+h);
      }
    })

    $('.hot').on('click',function(){
      $('#city_citys').scrollTop(0);
    })

        var cityname;
    // window.onload = function(){
      $('.detaiCity,.hot_city').on('click','li',function(){
        console.log(123);
        console.log($(this));
        cityname = $(this).text();
        console.log(cityname);
        localStorage.cityname = cityname;
      })

    // }
    // $('.codename').on('click','li',function(){
    //   cityname = $(this).text();
    //   console.log(cityname);
    //    localStorage.cityname = cityname;
    // })
     // console.log(cityname);
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
a{
  display: block;
  text-decoration: none;
  color: #333;
}
#city_header{
  width: 100%;
  height: .44rem;
  background: #19A0F0;
  text-align: center;
  line-height: .22rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  line-height: .44rem;

}
#city_header span{
  position: relative;
}
#city_header span:before{
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
#city_header p{
  font-size: .16rem;
  color: #fff;
}

/*搜索*/
#city_search{
  position: fixed;
  top: .44rem;
  left: 0;
  z-index: 10;
  height: .42rem;
  width: 100%;
  background: #e6f1f7;
}
#city_search input{
  width: 3.55rem;
  height: .27rem;
  border-radius: 15px;
  color: #888;
  line-height: .27rem;
  padding-left: .1rem;
  margin: 0.08rem 0 0 .08rem;
}

/*城市种类*/
#city_kind{
  width: 100%;
  height: .42rem;
  position: fixed;
  top: .86rem;
  left: 0;
  background: #fafafa;
  font-size: 0;
  z-index: 10;
}
#city_kind a{
  display: inline-block;
  width: 50%;
  height: .42rem;
  line-height: .42rem;
  color: #666;
  text-align: center;
  text-decoration: none;
  font-size: .14rem;
}

/*城市*/
#city_citys{
  margin-top: 1.28rem;
  position: relative;
  height: 5rem;
  width: 100%;
  /*background: red;*/
  overflow: auto;
  top: 0;
  background: #fff;
}
#city_citys p{
  height: .3rem;
  padding-left: .1rem;
  line-height: .3rem;
  color: #333;
  font-size: .14rem;
  background: #efefef;
}
.hot_city::after{

  content: "";
  display: block;
  clear:both;
  width: 100%;
  background: #fff;
}
.hot_city ul{
/*  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;*/
  padding: .1rem 0.2rem .1rem 0;
}
.hot_city li{
  width: 1.01rem;
  height: .29rem;
  line-height: .28rem;
  text-align: center;
  font-size: .14rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: .1rem;
  float: left;
  margin-left: .1rem;

}

.code li{
  height: .37rem;
  line-height: .37rem;
  padding-left: .1rem;
  border-bottom: 1px solid #bcbcbc;
}
.code p span,.code p b{
  float: right;
  position: relative;
}
.code p b{
  display: none;
}
.code p span:before,.code p b:before{
  content: "";
  width: .1rem;
  height: .1rem;
  position: absolute;
  border-top: 2px solid #aaa;
  border-left: 2px solid #aaa;
  transform:rotate(45deg);
  right: .4rem;
  top: .09rem;
}
.code p span:before{
  border-top: none;
  border-left:none;
  border-right: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
  
}
#city_citys .choice_code span{
  color: #099fde;
  font-size: .12rem;
  width: .27rem;
}
.choice_code{
  width: .27rem;
  position: fixed;
  right: 0;
  top: 1.3rem;
  text-align: center;
  font-size: .14rem;
  background: hsla(0,0%,100%,.5);
  color: #099fde;
}
.code ul{
  display: none;
}
.choice_code li:first-of-type{
  font-size: .1rem;
}
</style>
