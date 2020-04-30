import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import events from './modules/events';
const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        events
    }
  })
}
export default createStore