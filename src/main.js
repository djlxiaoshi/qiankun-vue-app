import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./pages/Home.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.css";

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./pages/About.vue"),
  },
];

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "vueApp" : "",
  mode: "history",
  routes, // short for `routes: routes`
});
Vue.config.productionTip = false;

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(props.container ? props.container.querySelector("#app") : "#app"); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}
if (window.__POWERED_BY_QIANKUN__) {
  // 动态添加publicPath
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render();
}
// 子组件的协议就ok了
export async function bootstrap() {}
export async function mount(props) {
  console.log(props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
}
