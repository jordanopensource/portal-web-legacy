import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import blog from './modules/blog';
import events from './modules/events';
import menus from './modules/menus';
import modal from './modules/modal';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        events,
        blog,
        menus,
        modal
    }
  })
}
export default createStore
