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
    },
    addEvent(state, event) {
        state.loadedEvents.push(event)
      },
    editEvent(state, editedEvent) {
        const eventIndex = state.loadedEvents.findIndex(
            event => event.id === editedEvent.id
        );
        state.loadedEvents[eventIndex] = editedEvent
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
      addEvent(vuexContext, event) {
        const createdEvent = {
          ...event,
          createdDate: new Date()
        }
        return axios
        .post(process.env.baseUrl + "/event/create", createdEvent)
        .then(res => {
          vuexContext.commit('addEvent', {...createdEvent, id: res.data.id})
        })
        .catch(e => context.error(e));
      },
      editEvent(vuexContext, editedEvent) {
        editedEvent.updatedDate = new Date();
        return axios.post(process.env.baseUrl + "/event/" + editedEvent.id + "/edit", editedEvent)
          .then(res => {
            vuexContext.commit('editEvent', editedEvent)
          })
          .catch(e => context.error(e));
      },
      deleteEvent(vuexContext, id) {
        return axios.get(process.env.baseUrl + "/event/" + id + "/delete")
          .catch(e => context.error(e));
      },
};

export default {
    state,
    mutations,
    actions,
    getters
}
