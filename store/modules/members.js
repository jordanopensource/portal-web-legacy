// Members Store
import axios from 'axios';

const state = {
  loadedMembers: [],
  membersCount: 1
};

const getters = {
  loadedMembers(state) {
    return (state.loadedMembers)
  },
  membersCount(state) {
    return (state.membersCount)
  }
};

const mutations = {
  setMembers(state, members) {
    state.loadedMembers = members
  },
  setMembersCount(state, count) {
    state.membersCount = count
  }
};

const actions = {
  async fetchMembers(vuexContext, context) {
    await axios
      .get(process.env.baseUrl + "/users?_sort=memberSince:DESC")
      .then(res => {
        const membersArray = []
        for (const key in res.data) {
          membersArray.push({
            ...res.data[key]
          })
        }
        vuexContext.commit("setMembers", membersArray);
      })
      .catch(e => context.error(e));
  },
  async countMembers(vuexContext, context) {
    await axios
      .get(process.env.baseUrl + "/users/count")
      .then(res => {
        const count = res.data
        vuexContext.commit("setMembersCount", count);
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
