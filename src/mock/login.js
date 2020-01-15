import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    code:0
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    code:0
  }
}
//用户信息池
let userpoor=[
  {username:'xiaod',password:'123456'},
  {username:'tim',password:'123456'}
]
export default {
  loginByUsername: config => {
    const { username,password } = JSON.parse(config.body).params
    console.log(userMap[username])
    if(userMap[username] === undefined){
      let res = {
        code:1,
        message:'账号或密码错误'
      }
      return res
    }else{
      return userMap[username]
    }
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
