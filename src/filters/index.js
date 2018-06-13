import Vue from 'vue'
import Xdate from '@/assets/scripts/xdate'

// 时间过滤器
Vue.filter('formatDate', (date, format) => {
  return new Xdate(date).format(format || 'yyyy-MM-dd')
})
