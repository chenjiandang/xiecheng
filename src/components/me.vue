<template>
 <div id="me">

      <div class="me_head"> 
        <p class="clearFloat"><i id="me_btnBack"></i><i id="me_btnMail"></i></p>
        <h2>登录携程，开启旅程</h2>
        <div class="login_box">
          <button id="me_login" class="login_button_bg">登录/注册</button>
          <button id="me_chadan" class="login_button_style">手机号查单</button>
        </div>
      </div>
      <div class="wallet">
        <i class="wallet_icon"></i>
        <div>
          <p>钱包</p>
          <span>礼品卡</span>
          <span>|</span>
          <span>现金</span>
          <span>|</span>
          <span>返现</span>
        </div>
      </div>
      <ul class="youhui clearFloat">
        <li>
          <i class="first_i"></i>
          <p>优惠券</p>
          <span>领券</span>
        </li>
      
        <li>
          <i class="center_i"></i>
          <p>优惠券</p>
          <span>领券</span>
        </li>
        <li>
          <i class="last_i"></i>
          <p>优惠券</p>
          <span>领券</span>
        </li>
      </ul>
      <ul class="myList">
        <li>常用信息<b>></b><span>旅客/地址/发票抬头</span></li>
        <li>我的收藏<b>></b><span>降价产品有提醒</span></li>
        <li>浏览历史<b>></b><span>近15天访问记录</span></li>
        <li>我要合作<b>></b><span>供应商加盟/代理合作</span></li>
      </ul>
      <ul class="myList">
        <li>出行工具<b>></b><span>航班动态/翻译助手等</span></li>
      </ul>
      <p class="exit">退出</p>
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

</style>
