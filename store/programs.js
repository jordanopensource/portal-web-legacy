import axios from 'axios';

export const state = () => ({
  list: null,
})

export const mutations = {
  set(state, content) {
    state.list = content
  },
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(process.env.baseUrl + '/programs');
    const content = response.data;
    commit("set", content);
  },
}
