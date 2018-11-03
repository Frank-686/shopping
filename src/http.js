/**
 * http配置
 */
import axios from 'axios'
import Message from 'vue-m-message'
// 超时时间
axios.defaults.timeout = 30000

//默认请求前缀
axios.defaults.baseURL = 'http://132.232.29.50:8080/tbk'
// http请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http 响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  return data
}, error => {
  return Promise.reject(error)
  })

export default axios