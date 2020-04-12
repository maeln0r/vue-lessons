import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Col,
  DatePicker,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Option,
  Row,
  Select,
  Table,
  TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';
import './assets/cssreset.min.css'
import './assets/main.min.css'

locale.use(lang);

Vue.use(Main, {locale});
Vue.use(Header, {locale});
Vue.use(Row, {locale});
Vue.use(Col, {locale});
Vue.use(Button, {locale});
Vue.use(DatePicker, {locale});
Vue.use(Form, {locale});
Vue.use(FormItem, {locale});
Vue.use(Input, {locale});
Vue.use(Select, {locale});
Vue.use(Option, {locale});
Vue.use(Table, {locale});
Vue.use(TableColumn, {locale});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
