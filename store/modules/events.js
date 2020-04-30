// Events Store
import axios from 'axios';

const state = {
    loadedEvents: []
};

const getters = {
    loadedEvents(state) {
        return (state.loadedEvents)
    }
};

const mutations = {
    setEvents(state, events) {
        state.loadedEvents = events
    }
};

const actions = {
    fetchEvents(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "/events")
          .then(res => {
            const eventsArray = res.data;
            vuexContext.commit("setEvents", eventsArray);
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
