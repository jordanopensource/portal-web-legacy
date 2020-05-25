// Members Store
import axios from 'axios';

const state = {
    loadedMembers: []
};

const getters = {
    loadedMembers(state) {
        return (state.loadedMembers)
    }
};

const mutations = {
    setMembers(state, members) {
        state.loadedMembers = members
    }
};

const actions = {
    fetchMembers(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "/users")
          .then(res => {
            const membersArray = res.data;
            vuexContext.commit("setMembers", membersArray);
          })
          .catch(e => context.error(e));
      },
};

export default {
    state,
    mutations,
    actions,
    getters
}
