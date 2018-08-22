import Vue from 'vue/dist/vue.esm'

import DashboardPage from '../DashboardPage.vue'
import SearchPage from '../SearchPage.vue'
import AccountsPage from '../AccountsPage.vue'

import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#v-app',
    components: {
      DashboardPage,
      SearchPage,
      AccountsPage
    }
  })
})