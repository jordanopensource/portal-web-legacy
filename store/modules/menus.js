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
  nuxtServerInit({
    commit
  }) {
    return axios
      .get(process.env.baseUrl + "/menus")
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
