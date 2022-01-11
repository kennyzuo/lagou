const cookieparser = process.server ? require("cookieparser") : undefined

// 为了防止数据冲突，务必要将 state 定义为工厂函数动态生成实例
export const state = () => {
  return {
    user: null,
  }
}

export const getters = {
  isLogin(state) {
    return !!state.user
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  /**
   * 仅在服务端渲染期间自动调用，作用：初始化容器数据，传递给客户端使用
   * @param {*} param0
   * @param {*} param1
   */
  nuxtServerInit({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      // 解析 cookie 字符串为 js 对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {}
    }
    commit("setUser", user)
  },
}
