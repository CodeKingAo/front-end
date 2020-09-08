import Vue from 'vue'
import Vuex from 'vuex'
import defaultThemeFn from '@/utils/style.js'
// import { InitWebSocket, CloseWebsocket } from './websocket.js'
// import cube from '../common/config/menu3'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0,
    // menu:cube,
    menuObj: {},
    menuClick: {},
    bread: [],
    Collapse: false,
    options: [],
    schoolInfo: [],
    hasSeted: false,
    userInfo: undefined,
    webSocket: '',
  },
  mutations: {
    updateCount(state, num) {
      state.count = num
    },
    updateMenuObj(state, menuObj) {
      state.menuObj = menuObj
    },
    updateMenuClick(state, menuClick) {
      state.menuClick = menuClick
    },
    updateBread(state, bread) {
      state.bread = bread
    },
    updateCollapse(state, num) {
      state.Collapse = num
    },
    UPDATE_VALUE(state, {
      key,
      value
    }) {
      state[key] = value;
    }
  },
  actions: {
    changeTheme({
      state,
      commit
    }, styleString) {
      commit('UPDATE_VALUE', {
        key: 'hasSeted',
        value: true,
      })
      let styleTag = document.getElementById('style')
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.setAttribute('id', 'style')
        document.head.appendChild(styleTag)
      }
      styleTag.innerText = defaultThemeFn(styleString)
    },
  }
})
// this.$store.state.count
// this.$store.commit('updateCount',80)