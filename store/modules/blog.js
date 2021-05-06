// Blog Store
import axios from 'axios';

const state = {
  loadedBlogs: [],
  featuredBlogs: new Set(),
};

const getters = {
  loadedBlogs(state) {
    return (state.loadedBlogs)
  },
  getFeaturedBlogs(state) {
    return (state.featuredBlogs)
  }
};

const mutations = {
  setBlogs(state, blogs) {
    state.loadedBlogs = blogs
  },
  setFeaturedBlogs(state, featuredBlogID) {
    state.featuredBlogs.add(featuredBlogID)
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
