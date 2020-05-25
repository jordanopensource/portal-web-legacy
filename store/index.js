import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import events from './modules/events';
import members from './modules/members';
const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        events,
        members
    }
  })
}
export default createStore