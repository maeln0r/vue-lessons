export default {
    state: {
    },
    mutations: {
        add_student: (state, payload) => {
            state[payload.id] = payload
        },
        remove_student: (state, payload) => {
            console.log(payload)
            state[payload.id] = null
        }
    },
    actions: {
        add_student: (context, item) => {
            context.commit('add_student', item)
        },
        edit_student: (context, item) => {
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
