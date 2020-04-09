import Vuex from 'vuex';
import socialFeed from './modules/social-feed';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed
    }
  })
}
export default createStore