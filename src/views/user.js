import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/modules/user'

function User(props) {
  useEffect(() => {
    // 如果数据为空，则在客户端再获取一次数据, 不为空则就使用服务端获取的数据
    if (!Object.keys(props.userInfo).length) {
      props.getUserInfo()
    }
  }, [])

  return (
    <>
      <h1>Hello {props.userInfo.title}</h1>
    </>
  )
}

// 仿nuxt，为每个组件加一个loadData方法，用于获取和填充store数据
User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}

export default connect(state => ({ userInfo: state.user.userInfo }), { getUserInfo })(
  User
)
