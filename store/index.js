import Vuex from 'vuex';
import blog from './modules/blog';
import events from './modules/events';
import menus from './modules/menus';
import modal from './modules/modal';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        events,
        blog,
        menus,
        modal
    }
  })
}
export default createStore
