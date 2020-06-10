// Blogs Store
import axios from 'axios';

const state = {
  loadedBlogs: []
};

const getters = {
  loadedBlogs(state) {
    return (state.loadedBlogs)
  }
};

const mutations = {
  setBlogs(state, blogs) {
    state.loadedBlogs = blogs
  }
};

const actions = {
  fetchBlogs(vuexContext, context) {
    return axios
      .get(process.env.baseUrl + "/blogs")
      .then(res => {
        const blogsArray = res.data;
        vuexContext.commit("setBlogs", blogsArray);
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
