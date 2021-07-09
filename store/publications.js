import axios from 'axios';

export const state = () => ({
  list: null,
  categories: null,
})

export const mutations = {
  setList(state, content) {
    state.list = content
  },
  setCategories(state, content) {
    state.categories = content
  },
}

export const actions = {
  async fetchList({commit}) {
    const res = await axios.get(process.env.baseUrl + '/publications');
    const data = res.data;
    commit("setList", data);
  },
  async fetchCats({commit}) {
    const res = await axios.get(process.env.baseUrl + '/publication-categories');
    const data = res.data;
    commit("setCategories", data);
  },
}
