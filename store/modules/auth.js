const cookieparser = process.server ? require('cookieparser') : undefined

const state = () => {
  return {
    auth: null
  }
};

const getters = {
  auth(state) {
      return (state.auth)
  }
};

const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
};

const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}