import Vue from 'vue';
import App from '../../App';
import router from './router';
import '../../assets/style/common.scss'
import {
  Picker,
  Button
} from 'vant';
const vantComponents = [Picker, Button];
// 批量安装vant组件
vantComponents.reduce((accu, cur) => {
  return accu ? accu.use(cur) : Vue.use(cur);
}, null);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')