/**
 * 首页
 */
import axios from 'axios'

// action.type
const GET_INFO = 'USER/GET_INFO'

// actionCreator
const getInfo = userInfo => ({
  type: GET_INFO,
  userInfo
})

export const getUserInfo = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get('http://localhost:3000/api/user/info').then(res => {
      const { userInfo } = res.data
      console.log(userInfo)
      dispatch(getInfo(userInfo))
    })
  }
}

const defaultState = {
  userInfo: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INFO:
      const newState = {
        ...state,
        userInfo: action.userInfo
      }
      return newState
    default:
      return state
  }
}
