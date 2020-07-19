import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'

// axios基准地址和延时时间
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// axios拦截器
axios.interceptors.response.use(res => {
  const data = res.data
  if (data.status === 0) {
    return data
  } else if (data.status === 10) { // status=10表示未登录，跳转login页
    router.push('/login')
  } else {
    alert(data.message)
  }
})
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
