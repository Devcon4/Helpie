import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      title: '',
      description: '',
      type: null
    }
  },
  mutations: {
    updateTitle(state, title) {
      if(!state.form) {
        state.form = { title: '', description: '', type: null};
      }
      state.form.title = title;
    },
    updateDescription(state, desc) {
      if(!state.form) {
        state.form = { title: '', description: '', type: null};
      }state.form.description = desc;
    },
    updateType(state, type) {
      if(!state.form) {
        state.form = { title: '', description: '', type: null};
      }state.form.type = type;
    }
  },
  actions: {}
});
