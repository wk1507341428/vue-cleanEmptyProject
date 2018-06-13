import axios from 'axios'
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.timeout = 1000 * 5
axios.defaults.baseURL = "http://rtb.test.voiceads.cn/"

Vue.prototype.$http = axios



// 给 promise 增加 finally
/* eslint-disable */
Promise.prototype.finally = function (callback) {
  let _Promise = this.constructor;
  return this.then((value) => {
    _Promise.resolve(callback()).then(() => value)
  }, (reason) => {
    _Promise.resolve(callback()).then(() => { throw reason })
  })
}

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // log.debug(`\r\nrequest url：${config.url}；\r\ndata：${JSON.stringify(config.data)}`)
  // config.headers.post['token'] = '12345678'
  return config
}, (error) => {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
  let _result = response.data || {}
  // 只要 CODE 非 0，都当错误处理
  if (_result.CODE && _result.CODE === '0') {
    let _successData = _result.data || {}
    _successData.__CODE = _result.CODE
    _successData.__MESSAGE = _result.MESSAGE
    return _successData
  } else {
    /* eslint-disable */
    // return Promise.reject({ CODE: _result.CODE, MESSAGE: _result.MESSAGE, data: _result.data })
    return response
  }
}, function (error) {
  /* eslint-disable */
  // log.debug(`\r\nresponse error：${JSON.stringify(error)}`)
  // return Promise.reject({ CODE: undefined, MESSAGE: error.message })
})



const ajax = {
  post: (url, data) => {
    return axios.post(url, data)
  }
}

export default ajax
