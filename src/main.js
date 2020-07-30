import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/css/reset.css"
import Router from 'vue-router';
const routerPush = Router.prototype.push;
// import 'normalize.css' //重置html 默认样式
import PostCss from 'postcss-px-to-viewport'
window.baseImgUrl = "http://119.3.196.255:7604/images/iconPic/"
    // 预留网上图片地址
    // 全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// axios
import axios from 'axios'
Vue.prototype.$http = axios
    // 懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});
// 加载更多
import { List } from 'vant';
Vue.use(List);
// swper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
    // form表单
import { Form } from 'vant';
Vue.use(Form);
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    PostCss,
    render: h => h(App)
}).$mount('#app')