// Index Store
import axios from 'axios';

export const state = () => ({
  loadedMenus: []
})

export const mutations = {
  setMenus(state, menus) {
    const obj = {}
    menus.forEach(m => {
      obj[m.menuId] = m;
    });
    state.loadedMenus = obj
  }
}

export const actions = {
  async nuxtServerInit({commit}) {
    const menusRes = await axios.get(process.env.baseUrl + "/menus");
    const menusArray = menusRes.data;
    commit("setMenus", menusArray);
  }
}