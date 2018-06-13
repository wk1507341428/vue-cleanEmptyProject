import api from '../api'
import ajax from '../ajax'

export default {
  getCustomerList: (data) => {
    return ajax.post(api.getCustomerList, data)
  },
  getMessageList: (data) => {
    return ajax.post(api.getMessageList, data)
  },
  getRoleUserList: (data) => {
    return ajax.post(api.getRoleUserList, data)
  },
  getTestUrl: (data) => {
    return ajax.post(api.testUrl, data)
  }
}