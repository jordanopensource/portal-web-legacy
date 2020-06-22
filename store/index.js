import Vuex from 'vuex';
import socialFeed from './modules/social-feed';
import blogs from './modules/blogs';
import events from './modules/events';
import members from './modules/members';
import auth from './modules/auth';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        socialFeed,
        events,
        blogs,
        members,
        auth
    }
  })
}
export default createStore