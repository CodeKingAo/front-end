import axios from 'axios';
import QS from 'qs';
import { Toast } from 'vant';
import store from '@/store/index';
import { HTTP_ROOT, HTTP_TIMEOUT } from './http-config';
// import router from '@/router'

axios.defaults.baseURL = HTTP_ROOT;
axios.defaults.timeout = HTTP_TIMEOUT;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0,
      overlay: true
    });
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.error(error);
  })


// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    // 否则的话抛出错误
    Toast.clear();
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 404请求不存在
        case 404:
          Toast.clear();
          Toast.fail({
            message: '网络请求不存在',
            duration: 1000,
            forbidClick: true
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Toast.clear();
          Toast.fail({
            message: error.response.data.message,
            duration: 1000,
            forbidClick: true
          });
      }
      return Promise.reject(error.response);
    }
  }
);

export default {
  /**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err.data)
      })
    });
  },
  /** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data)
        })
    });
  }
}