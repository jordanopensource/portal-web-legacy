// Index Store
import axios from 'axios';

export const state = () => ({
  loadedMenus: [],
  pages: [],
})

export const mutations = {
  setMenus(state, menus) {
    const obj = {}
    menus.forEach(m => {
      obj[m.menuId] = m;
    });
    state.loadedMenus = obj
  },
  setPages(state, pages) {
    const obj = {}
    pages.forEach(m => {
      obj[m.pageId] = m;
    });
    state.pages = obj
  }
}

export const actions = {
  async nuxtServerInit({commit}) {
    const menusRes = await axios.get(process.env.baseUrl + "/menus");
    const menusArray = menusRes.data;
    commit("setMenus", menusArray);
    const pagesRes = await axios.get(process.env.baseUrl + '/page-metas');
    const pagesArray = pagesRes.data;
    commit("setPages", pagesArray);
  }
}