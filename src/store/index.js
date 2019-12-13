/**
 * store入口
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import home from './modules/home'

const reducer = combineReducers({
  home
})

// 创建store
const store = createStore(reducer, applyMiddleware(thunk))

export default store
