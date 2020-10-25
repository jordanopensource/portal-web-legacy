// Modal Store

const state = {
  showModal: false
};

const getters = {
  getShowModal(state) {
    return (state.showModal)
  }
};

const mutations = {
  setShowModal(state, value) {
    state.showModal = value
  }
};

const actions = {
  setShowModal({commit}, value) {
    commit('setShowModal', value)
  }
};

export default {
  state,
  mutations,
  getters,
  actions
}
