import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Xingcheng from '@/components/xingcheng'
import Service from '@/components/service'
import My from '@/components/me'
import Hotel from '@/components/hotel'
import Ticket from '@/components/ticket'
import Travel from '@/components/travel'
import Play from '@/components/play'
import Cards from '@/components/cards'
import Order_ticket from '@/components/order_ticket'
import Diytour from '@/components/diytour'
import Citys from '@/components/citys'
import Shop from '@/components/shop'
import Cart from '@/components/cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/hotel',
      component: Hotel
    },
    {
      path: '/ticket',
      component: Ticket
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/travel',
      component: Travel
    },
    {
      path: '/citys',
      component: Citys
    },
    {
      path: '/play',
      component: Play
    },
    {
      path: '/order_ticket',
      component: Order_ticket
    },
    {
      path: '/diytour',
      component: Diytour
    },
    {
      path: '/cards',
      component: Cards
    },
    {
      path: '/xingcheng',
      name: 'xingcheng',
      component: Xingcheng
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/me',
      name: 'me',
      component: My
    }
  ]
})
