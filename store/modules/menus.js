// Menus Store
import axios from 'axios';

const state = {
  loadedMenus: []
};

const getters = {
  loadedMenus(state) {
    return (state.loadedMenus)
  }
};

const mutations = {
  setMenus(state, menus) {
    const obj = {}
    menus.forEach(m => {
      obj[m.menuId] = m;
    });
    state.loadedMenus = obj
  }
};

const actions = {
  nuxtServerInit({ commit }, context) {

    console.log(`context.$config.baseUrl is: ${context.$config.baseUrl}`)
    console.log(`process.env.baseUrl is: ${process.env.baseUrl}`)

    console.log(`this.$config.baseUrl is: ${this.$config.baseUrl}`)

    const baseUrl = context.$config.baseUrl
    console.log(`baseUrl is: ${baseUrl}`)

    return axios
      .get(`${baseUrl}/menus`)
      .then(res => {
        const menusArray = res.data;
        commit("setMenus", menusArray);
      })
      .catch(e => context.error(e));
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
