import axios from 'axios';

export const state = () => ({
  info: null,
})

export const mutations = {
  set(state, content) {
    state.info = content
  },
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(process.env.baseUrl + '/contact-info');
    const content = response.data;
    commit("set", content);
  },
}
