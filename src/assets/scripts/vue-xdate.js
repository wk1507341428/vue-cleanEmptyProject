import _xdate from './xdate'

const xdate = {
  installed: false,
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$xdate', {
      get () {
        return _xdate
      }
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xdate)
}
export default xdate
