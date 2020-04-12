import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Form, FormItem, Input, Table, TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/cssreset.min.css'
import './assets/main.min.css'

Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
