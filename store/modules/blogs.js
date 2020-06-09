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
  },
  addBlog(state, blog) {
    state.loadedBlogs.push(blog)
  },
  editBlog(state, editedBlog) {
    const blogIndex = state.loadedBlogs.findIndex(
      blog => blog.id === editedBlog.id
    );
    state.loadedBlogs[blogIndex] = editedBlog
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
  },
  addBlog(vuexContext, blog) {
    const createdBlog = {
      ...blog,
      createdDate: new Date()
    }
    return axios.post(process.env.baseUrl + "/blogs", createdBlog)
      .then(res => {
        vuexContext.commit('addBlog', {
          ...createdBlog,
          id: res.data.id
        })
      })
      .catch(e => context.error(e));
  },
  editBlog(vuexContext, editedBlog) {
    editedBlog.updatedDate = new Date();
    return axios.put(process.env.baseUrl + "/blogs/" + editedBlog.id, editedBlog)
      .then(res => {
        vuexContext.commit('editBlog', editedBlog)
      })
      .catch(e => context.error(e));
  },
  deleteBlog(vuexContext, id) {
    return axios.delete(process.env.baseUrl + "/blogs/" + id)
      .catch(e => context.error(e));
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}
