import requests from "./ajax";
import mockRequests from './mockAjax'

//url待后端写入

// 注册
export const reqUserRegister = (data) => requests({ url: '/signup', method: 'post', data })
// 登录
export const reqUserLogin = (data) => requests({ url: '/login', method: 'post', data })
// 带着token拿用户信息
export const reqUserInfo = () => requests({ url: '#', method: 'get' })
//退出登录
export const reqLoginOut = () => requests({ url: '#', method: 'get' }) / post / getAllPosts
//发布贴子
// export const reqPost = () => requests({ url: '/posts', method: post })
//获取首页贴子
// export const reqGetPosts = () => requests({ url: '/post/getAllPosts', method: 'get' })

//mock
//注册
// export const reqUserRegister = (data)=> mockRequests({url:'/signup',method:'post',data})
// //登录
// export const reqUserLogin = (data)=> mockRequests({url:'/login',method:'post',data})
//发布贴子
export const reqPost = (message) => mockRequests({ url: '/posts', method: 'post', data: message })
//获取首页贴子
export const reqGetPosts = () => mockRequests({ url: '/getAllPosts', method: 'get' })