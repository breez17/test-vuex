import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [
      {
        id: 0,
        content: "Text"
      },
      {
        id: 1,
        content: "Some Text"
      }
    ]
  },
  mutations: {
    ADD_TEXT({ state }, payload) {
      this.state.words.push(...payload);
    },
    EDIT_TEXT({ store }, payload) {
      this.state.words[payload.id] = payload.item;
    },
    DELETE_TEXT({ store }, payload) {
      this.state.words.splice(payload.id, 1);
    }
  },
  actions: {
  },
  getters: {
    getText: state => state.words,
  }
})
