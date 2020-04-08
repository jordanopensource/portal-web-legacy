// Social Feed Store
import axios from 'axios';

const state = {
    loadedPosts: []
};

const getters = {
    loadedPosts(state) {
        return (state.loadedPosts)
    }
};

const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
};

const actions = {
    nuxtServerInit(vuexContext, context) {
        return axios.get(process.env.social_proxy_api)
        .then(res => {
          const postsArray = []
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key })
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(e => {
            vuexContext.commit('setPosts', [{
                id:'0',
                src:'',
                lang:'',
                text:'',
                time:''
            }])
        });
    },
    setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}
