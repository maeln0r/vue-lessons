import Vuex from 'vuex'
import Vue from 'vue'
import course from "@/store/modules/course";
import student from "@/store/modules/student";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {
        /**
         * Не забудь подписаться в компонентах на изменения
         * store.subscribe((mutation, state) => {
         *     localStorage.setItem('store', JSON.stringify(state));
         * });
         */
        initStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    },
    actions: {},
    modules: {
        course,
        student
    },
});
