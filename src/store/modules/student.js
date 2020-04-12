import Vue from 'vue'

export default {
    state: {},
    mutations: {
        add_student: (state, payload) => {
            let id = payload.id;
            if (id === 0) {
                id = Object.keys(state).length + 1
            }
            payload['id'] = id;
            Vue.set(state, id, payload)
        },
        remove_student: (state, payload) => {
            let id = payload.id;
            Vue.set(state, id, null)
        }
    },
    actions: {
        add_student: (context, item) => {
            context.commit('add_student', item)
        },
        remove_student: (context, item) => {
            context.commit('remove_student', item)
        }
    },
    getters: {
        get_students: state => {
            return state
        }
    }
};
