// Modal Store

export const state = () => ({
  showModal: false
})

export const mutations = {
  setShowModal(state, value) {
    state.showModal = value
  }
}

export const actions = {
  setShowModal({commit}, value) {
    commit('setShowModal', value)
  }
}