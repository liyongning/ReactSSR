/**
 * 首页
 */
// import axios from 'axios'

// action.type
const GET_LIST = 'HOME/GET_LIST'

// actionCreator
const changeList = list => ({
  type: GET_LIST,
  list
})

export const getHomeList = server => {
  return (dispatch, getState, $axios) => {
    // 将请求发送到server端，由server统一代理到接口服务器
    return $axios.get('/api/course/list').then(res => {
      const { list } = res.data
      console.log(list)
      dispatch(changeList(list))
    })
  }
}

const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      const newState = {
        ...state,
        list: action.list
      }
      return newState
    default:
      return state
  }
}
