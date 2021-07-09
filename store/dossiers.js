import axios from 'axios';

export const state = () => ({
  item: null,
})

export const mutations = {
  set(state, content) {
    state.item = content
  },
}

export const actions = {
  async fetch({commit}, slug) {
    const response = await axios.get(process.env.baseUrl + '/dossiers?pageId=' + slug);
    const content = response.data[0];
    commit("set", content);
  },
}
