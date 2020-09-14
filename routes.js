
import login from '@/views/recruit/login'
import regist from '@/views/recruit/regist'
import personInfo from '@/views/recruit/personInfo' // 会员消费总览
import welcome from '@/views/recruit/welcome'

export default [
  {
    path: '/recruit/login',
    name: '登录',
    component: login
  },
  {
    path: '/recruit/regist',
    name: '注册',
    component: regist
  },
  {
    path: '/recruit/personInfo',
    name: '人员信息',
    component: personInfo
  },
  {
    path:'/recruit/welcome',
    name:'欢迎页面',
    component:welcome
  },

  ]
