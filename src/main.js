// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from './router/router'

Vue.config.productionTip = false

console.log(router);

new Vue({
  el: '#app',
  router,
  template:`<div>
                <router-view></router-view>
            </div>`
})
