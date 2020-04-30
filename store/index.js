import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import blogs from './modules/blogs';
import events from './modules/events';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        blogs,
        events
    }
  })
}
export default createStore