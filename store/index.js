import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import blogs from './modules/blogs';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        blogs
    }
  })
}
export default createStore