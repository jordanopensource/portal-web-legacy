const state = {
    Brcrumbs: [],
    
  };
  
  const getters = {
    GetBrcrumbs(state) {
      return state.Brcrumbs
    }
  };
  
  const mutations = {
    setCrumbs(state, crumb1) {
        
        
        
        state.Brcrumbs.push(crumb1);
      
      
    },
    removeCrumb(state , num){
      state.Brcrumbs.splice(num);
    }
  };
  
  const actions = {
    setCrumbs( {commit} ,crumb){

      
      commit('setCrumbs',crumb)
      
    },
    removeCrumb({commit},num){
      
        commit('removeCrumb',num)
      
    }
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  }