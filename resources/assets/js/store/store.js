import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: "undefiend"
    },

    getters: {
        // Here we will create a getter
    },

    mutations: {
        setTitle(title) {

            state.title=title;
        }
    },

    actions: {
        // Here we will create Larry
    }
});
