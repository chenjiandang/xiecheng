<template>
  <div id="order_ticket">
    <div id="order_ticket">
      <!-- 选择附加产品头部 -->
      <div id="order_ticket_header">
       <span></span>
        <p class="order_ticket_header_title">选择日期和人数</p>
      </div>
      <div id="order_ticket_time clearFloat">
        <div class="order_ticket_month">
          <ul>
            <li>
              <span class = "order_month addColor">
              0月
              </span>
              <span class = "base_price">￥1562起</span>
            </li>
            <li>
              <span class = "order_month">
                12月
              </span>
              <span class = "base_price">￥1562起</span>
            </li>
            <li>
              <span class = "order_month">
                12月
              </span>
              <span class = "base_price">￥1562起</span>
            </li>
            <li>
              <span class = "order_month">
                12月
              </span>
              <span class = "base_price">￥1562起</span>
            </li>
          </ul>
          <b class = "order_underline"></b>
        </div>
        <div id="date_day">
            <ul>
              <li style="color:#ff902d">日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li style="color:#ff902d">六</li>
            </ul>
        </div>
        <div class="time_date">
          <div id="nowTime" class="showDate">
            
          </div>
          <div id="nextTime" class="showDate">
            
          </div>
            <div id="nextTime2" class="showDate">
              
           </div>
            <div id="nextTime3" class="showDate">
              
           </div>

        </div>
      </div>
      <div id = "bigPerson" class="clearFloat" v-for = "(item,index) in obj2">
        <span class = "tour_name">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;<b>{{item.age}}</b></span>
        <p class="button" >
          <span class = "minus"  @click = "musPro(item,index)">-</span>
          <span class = "num" >{{item.num}}</span>
          <span class = "add" @click = "addPro(item,index)">+</span>
        </p>
        <div class="diytour_list_price" style="display:none">
            <p><b class = "singlePrice"></b></p>
      
          </div>
      </div>

      <div id="order_footer">
        <p><router-link to = "/diytour">继续预订<span>选择资源</span></router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      obj2:[]
    }
  },
  created(){
        this.$http('../../static/order.json').then((res)=>{
          console.log(res.data.person);
          this.obj2 = res.data.person;

          var orderList = this.$store.state.orderList;
          for(var n=0; n<orderList.length; n++){
            for(var m=0; m<this.obj2.length;m++){
              if (orderList[n].name === this.obj2[m].name) {
                  this.obj2[m].num = orderList[n].num;
              };
            }
          }
        })
        var oMonths = document.getElementsByClassName('order_month');

         window.onload=function()
            {
              var oNowTime = document.getElementById("nowTime");
              var oNextTime = document.getElementById("nextTime");
              var oNextTime2 = document.getElementById("nextTime2");
              var oNextTime3 = document.getElementById("nextTime3");
              var bBtn =true;
              var oDate = new Date();
              var month = oDate.getMonth()+1;

              oMonths[0].innerHTML = month +"月";
              for(var n=0; n<oMonths.length-1; n++){
                if (month == 12) {
                  month = 1;
                } else {
                  month = month+1;
                }
                oMonths[n+1].innerHTML = month +"月" ;
              }

                if(bBtn)
                 {
                      
                      //判断时间   当12月是   后面一个月是1月份
                      if (oDate.getMonth()+1 == 12) {
                        showDate(oNowTime,oDate.getFullYear(),oDate.getMonth()+1,true);
                          showDate(oNextTime,oDate.getFullYear()+1,1,true);
                          showDate(oNextTime2,oDate.getFullYear(),2,true);
                          showDate(oNextTime3,oDate.getFullYear(),3,true);
                        
                     }else{
                        showDate(oNowTime,oDate.getFullYear(),oDate.getMonth()+1,true);
                        showDate(oNextTime,oDate.getFullYear(),oDate.getMonth()+2,true);
                        showDate(oNextTime2,oDate.getFullYear(),oDate.getMonth()+3,true);
                        showDate(oNextTime3,oDate.getFullYear(),oDate.getMonth()+4,true);
                     
                      } 
                      
                 }else{
                      odiv.style.display="none";
                  }
                  bBtn = !bBtn;  //真假切换
                  
               

              //是否生成容器到  哪个容器里面  左边  右边
              function  showDate(obj,year,month,bBtn)
              {
                  var dayNum = 0;  //这个月一共多少天;
                 // if(!obj.bBtn)
                 //  {
                     
                      var otable = document.createElement("table");
                    var otbody = document.createElement("tbody");  //改错
                      for (var i = 0; i < 6; i++) {
                          var otr = document.createElement("tr");
                        for (var j= 0; j< 7; j++) {
                            var otd= document.createElement("td");
                            otr.appendChild(otd);
                        }
                         
                         otbody.appendChild(otr);
                    }
                   otable.appendChild(otbody);
                   obj.appendChild(otable);
                    // obj.bBtn = true;

                 // }

                  var aTd = obj.getElementsByTagName("td");
                  // console.log(aTd);
                    //误区  如果 obj改为 doucument 则只能显示一张日历
                  //每次都要清空一次  再生产  为什么？？  每次点击都是要更新日历内容  如果换一天了 更新一天的日历所以必须清空重新生成
                  for (var i = 0; i < aTd.length; i++) {
                     aTd[i].innerHTML = "";
                  }
                  
                  if(month ==1 || month==3 || month ==5 || month ==7 || month==8 || month==10 || month==12)
                  {
                       dayNum  = 31;
                  }else if (month == 4 || month == 6 || month == 9 || month == 11){
                      dayNum  = 30;
                 }else{ //2月份闰年 判断
                      if(month == 2 && isleeyear(year)){
                          dayNum =29;
                      }else{
                          dayNum = 28;
                      }
                 }

                 oDate.setFullYear(year);
                 oDate.setMonth(month-1);
                 oDate.setDate(1);
                 console.log(oDate.getDay());
                 console.log(year);
                 console.log(month);
                 console.log(oDate.getDate());
               var arr = ['￥1200',"￥1000","￥900","￥1100"];
                 switch(oDate.getDay())
                 {
                      case 0:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+0].innerHTML = i+1 + '<span>￥1200</span>' ;
                         
                      }
                      break;   
                       case 1:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+1].innerHTML = i+1 + '<span>￥1200</span>';
                          // console.log(aTd[i+5]);
                      }
                      break;   
                       case 2:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+2].innerHTML = i+1 + '<span>￥1200</span>' ;
                      }
                      break;   
                       case 3:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+3].innerHTML = i+1 + '<span>￥1200</span>' ;
                      }
                      break;   
                       case 4:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+4].innerHTML = i+1 + '<span>￥1200</span>';

                      }
                      break;  
                        case 5:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+5].innerHTML = i+1 + '<span>￥1200</span>' ;
                      }
                      break;   
                        case 6:
                      for(var i=0; i<dayNum;i++)
                      {
                          aTd[i+6].innerHTML = i+1 + '<span>￥1200</span>' ;
                      }
                     break;   
                    
                }
              
            }
             //闰年判断
              function isleeyear(year)
             {
                   if (year %4 == 0 && year%100 !=0) {
                         return true;
                   }else if(year%400==0){
                         return true;
                   }else{
                        return false;
                   }
             }
              
              var aTd = document.getElementsByTagName('td');
             var index,lastIndex;
                oDate = new Date();
                var aTd = document.getElementsByTagName('td');

                
                for(var n=0; n<42; n++){

                    // console.log(aTd[n].innerHTML);
                    if (oDate.getDate() == parseInt(aTd[n].innerHTML)) {
                        aTd[n].style.background = 'rgb(25, 160, 240)';
                        index = n;
                       // console.log(index);
                         for(var n=0; n<index; n++){
                            // console.log(aTd[n].innerHTML);
                            if (aTd[n].innerHTML == "") {

                            } else{
                                aTd[n].style.color = "#d8d6d6";

                               aTd[n].innerHTML = parseInt(aTd[n].innerHTML);
                           

                            }
                          
                        }
                    };
                }


              $('table').on('click','td',function(){
                  // console.log($(this).text().length);

                  if ($(this).text().length > 2) {


                    $(this).css('background','#19a0f0').siblings('td').css('background','#fff').parent('tr').siblings('tr').children('td').css('background','#fff');
                    // console.log(parseInt($(this).children('span').text().substr(1)));
                    // if ( $('.singlePrice').eq(0).text() == "" || ) {};
                    $('.singlePrice').eq(0).text(parseInt($(this).children('span').text().substr(1)));
                    $('.singlePrice').eq(1).text(parseInt($(this).children('span').text().substr(1))/2);
                  };
              });

         console.log($('.singlePrice').text());
         }


  },
  mounted(){
        
        // 点击订票月份实现切换
        $('.order_ticket_month').on('click','li',function(e){
          // console.log($(".order_underline"));
          if (e.target == $(this)) {return};
          $(".order_underline").css('left',e.target.offsetLeft)  ;
        });
         //点击出现日期
       $('.order_ticket_month').on('click','li',function(){
          $(this).children('.order_month').addClass("addColor").end().siblings('li').children('.order_month').removeClass("addColor");
          var index = $(this).index();
          $('.showDate').eq(index).show().siblings('.showDate').hide();
       });
    },
    methods:{
        addPro(item,index){
            item.num++;
            this.$store.dispatch('add_Pro',item);
        },
        musPro(item,index){
            console.log(index);
            this.$store.dispatch('mus_Pro',item);
            if (index == 0) {

                if (item.num >1) {
                  item.num--;
                };
            } else {
               if (item.num >0) {
                  item.num--;
                };
            }
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@charset "utf-8";
body{
  /*background: #5c5f6b;*/
}
a{
  display: block;
   color: #fff;
   text-decoration: none;
}
#order_ticket_header{
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
#order_ticket_header span{
  position: relative;
}
#order_ticket_header span:before{
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
#order_ticket_header p{
  font-size: .12rem;
  color: #fff;
}
#order_ticket_header .order_ticket_header_title{
  font-size: .2rem;
}
#order_ticket{
  background: #F5F5F5;
}
#order_ticket_header {
  line-height: .44rem;
}
#order_ticket_header .order_ticket_header_title{
  font-size: .2rem;
}

/*预订票时间*/
.order_ticket_month{
  height: .43rem;
  margin-top: .44rem;
  position: relative;
}
.order_ticket_month li{
  width: .93rem;
  font-size: .12rem;
  text-align: center;
  line-height: .18rem;
  float: left;
  z-index: 2;
  padding-top: .05rem;
}
.order_ticket_month li span{
  display: block;
}
.base_price{
  color: #ff6913;
}
.order_ticket_month b{
  width: .93rem;
  height: .43rem;
  border-bottom: 2px solid #50B6F2;
  position: absolute;
  left: 0;
}
.time_date{
  background: #fff;
}
.time_date td{
  height: 0.6rem;
  position: relative;
}
.time_date td span{
  display: block;
  font-size: .12rem;
  color: #888;
}
.time_date td b{
  position: absolute;
  height: .6rem;
  width: .55rem;
  background: rgba(0,0,0,0.1);
  top: 0;
  left: 0;
  z-index: 3;
  display: none;
}
#date_day{
  background: #fff;
  height: .3rem;
}

#date_day ul{
  display: flex;
  justify-content:space-around;
  font-size: .12rem;
  color: #333;
}
#date_day li{
  width: .52rem;
  height: .2rem;
  padding: 0.03rem 0;
  text-align: center;
}
table td{
  width: .53rem;
  height: .4rem;
  text-align: center;
}
.data{
  width: 100%;
  text-align: center;
  height: .3rem;
  color: #000;
  font-size: .16rem;
  line-height: .3rem;
}
#nextTime,#nextTime2,#nextTime3{
  display: none;
}
.addColor{
  color: #19a0f0;
}
#bigPerson span{
  float: left;
}
#bigPerson{

  margin-top: .1rem;
}
#littlePerson b{
  font-weight: normal;
  font-size: .12rem;
}
#bigPerson .button,#littlePerson .button{
  float: right;
  margin-top: 0.05rem;
  vertical-align: middle;
  margin-right: .1rem;
}

#bigPerson,#littlePerson{
  background: #fff;
  height: .38rem;
  line-height: .38rem;
  font-size: .16rem;
  padding-left: .2rem;
  padding-bottom: .1rem;
  border-bottom: 1px solid  #e4e4e4;
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

.tour_name b{
  font-weight: normal;
  font-size: .12rem;
}
#order_footer{
  width: 100%;
  height: .48rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #ff7d13;
  line-height: .48rem;
 
  text-align: center;
}
#order_footer span{
  font-size: .12rem;
  margin-left: .1rem;
}


</style>
