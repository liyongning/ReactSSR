/**
 * store入口
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import home from './modules/home'
import user from './modules/user'

const reducer = combineReducers({
  home,
  user
})

// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

// 这里需要导出两个store，一个用户server端，一个用户客户端
export const clientStore = () => {
  // 将服务端设置的初始值设置为store的默认值
  const defaultState = window.__context ? window.__context : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}

// 服务端通过dispatch来获取数据，然后给客户端store提供一个初始值
export const serverStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
