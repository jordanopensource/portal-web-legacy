import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import blog from './modules/blog';
import events from './modules/events';
import menus from './modules/menus';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        events,
        blog,
        menus
    }
  })
}
export default createStore
