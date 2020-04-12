import Vue from 'vue'

export default {
    state: {},
    mutations: {
        add_course: (state, payload) => {
            let id = payload.id;
            if (id === 0) {
                id = Object.keys(state).length + 1
            }
            payload['id'] = id;
            Vue.set(state, id, payload);
            Vue.set(state[id], 'studentSelect', [])
        },
        remove_course: (state, payload) => {
            let id = payload.id;
            Vue.set(state, id, null)
        }
    },
    actions: {
        add_course: (context, item) => {
            context.commit('add_course', item)
        },
        remove_course: (context, item) => {
            context.commit('remove_course', item)
        }
    },
    getters: {
        get_course: state => {
            return state
        }
    }
};
