import Vuex from 'vuex'
import Vue from 'vue'

import User from '../Models/User';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: "undefiend",
        user: {name:'',email:''}
    },

    getters: {
        // Here we will create a getter
    },

    mutations: {
        setTitle :(state,title)=> state.title = title,
        setUser :(state,user)=> state.user =new User(user)

    },

    actions: {
        setUserAction ({commit,state}, payload) {

            commit('setUser',payload);

        }
    }
});
