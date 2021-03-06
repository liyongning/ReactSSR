/**
 * 首页
 */
// import axios from 'axios'

// action.type
const GET_INFO = 'USER/GET_INFO'

// actionCreator
const getInfo = userInfo => ({
  type: GET_INFO,
  userInfo
})

export const getUserInfo = server => {
  return (dispatch, getState, $axios) => {
    return $axios.get('/api/user/info').then(res => {
      const { userInfo } = res.data
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
