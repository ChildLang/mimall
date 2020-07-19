// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由组件
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Detail from '../pages/datail.vue'
import Product from '../pages/product.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderList from '../pages/orderList.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/aliPay.vue'
import Login from '../pages/login.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/', name: 'index', component: Index },
        { path: 'detail/:id', name: 'detail', component: Detail },
        { path: 'product/:id', name: 'product', component: Product }
      ]
    },
    { path: '/cart', name: 'cart', component: Cart },
    {
      path: 'order',
      name: 'order',
      component: Order,
      children: [
        { path: 'orderlist', name: 'orderlist', component: OrderList },
        { path: 'orderConfirm', name: 'orderConfirm', component: OrderConfirm },
        { path: 'orderpay', name: 'orderpay', component: OrderPay }
      ]
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/alipay', name: 'alipay', component: AliPay }
  ]
})
export default router
