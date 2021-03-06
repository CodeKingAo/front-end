import Vue from 'vue'
import App from './App.vue'

// 路由守卫
import router from './router'

// 在桌面端使用 引入模块后自动生效
import '@vant/touch-emulator';

// axios引用
import http from './http';
Vue.prototype.$HTTP = http

// 注册store
import store from "./store";

// 集成 v-charts  https://v-charts.js.org/#/start
import VCharts from 'v-charts'

Vue.use(VCharts)


// vant组件应用
import "babel-polyfill";
// import 'vant/lib/index.less';
import {
  Button
  , Cell
  , CellGroup
  , Icon
  , Image as VanImage
  , Col
  , Row
  , Popup
  , Toast
  , Calendar
  , Checkbox
  , CheckboxGroup
  , DatetimePicker
  , Field
  , Form
  , PasswordInput
  , NumberKeyboard
  , Picker
  , RadioGroup
  , Radio
  , Rate
  , Search
  , Slider
  , Stepper
  , Switch
  , Uploader
  , ActionSheet
  , Dialog
  , DropdownMenu
  , DropdownItem
  , Loading
  , Notify
  , Overlay
  , PullRefresh
  , ShareSheet
  , SwipeCell
  , Circle
  , Collapse
  , CollapseItem
  , CountDown
  , Divider
  , Empty
  , ImagePreview
  , Lazyload
  , List
  , NoticeBar
  , Progress
  , Skeleton
  , Step
  , Steps
  , Sticky
  , Swipe
  , SwipeItem
  , Grid
  , Tag
  , GridItem
  , IndexBar
  , IndexAnchor
  , NavBar
  , Pagination
  , Sidebar
  , SidebarItem
  , Tab
  , Tabs
  , Tabbar
  , TabbarItem
  , TreeSelect
} from 'vant';

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Calendar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(Form);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Picker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Rate);
Vue.use(Search);
Vue.use(Slider);
Vue.use(Stepper);
Vue.use(Switch);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading);
Vue.use(Notify);
Vue.use(Overlay);
Vue.use(TreeSelect);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Pagination);
Vue.use(NavBar);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tag);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Skeleton);
Vue.use(Progress);
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Lazyload);
Vue.use(ImagePreview);
Vue.use(Empty);
Vue.use(Divider);
Vue.use(CountDown);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Circle);
Vue.use(SwipeCell);
Vue.use(ShareSheet);
Vue.use(PullRefresh);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  el: "#app",
  render: h => h(App)
});
