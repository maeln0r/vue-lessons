export default {
    state: {
        courses: []
    },
    mutations: {
        set_courses: (state, payload) => {
            state.courses = payload;
        },
        add_courses: (state, payload) => {
            state.courses.push(payload);
        }
    },
    actions: {},
    getters: {},
};
