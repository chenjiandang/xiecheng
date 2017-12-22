// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios
import axios from 'axios'
import store from './vuex/store'

Vue.config.productionTip = false


//使用插件
Vue.prototype.$http = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }

})

// 窗口大小的改变
var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
var per = clientWidth / 375;
document.documentElement.style.fontSize = per * 100 +"px";
window.onresize = function  () {
	// body...
	var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var per = clientWidth / 375;
	document.documentElement.style.fontSize = per * 100 +"px";
}

