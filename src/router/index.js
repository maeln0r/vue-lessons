import Vue from 'vue'
import VueRouter from 'vue-router'
import Wrapper from '../views/Wrapper'
import CourseList from '../views/course/CourseList'
import Course from '../views/course/Course'
import CourseEdit from '../views/course/CourseEdit'
import StudentEdit from '../views/student/StudentEdit'
import StudentList from '../views/student/StudentList'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'course'
    },
    {
        path: '/course',
        name: 'course_list',
        component: Wrapper,
        children: [
            {
                path: '',
                name: 'course_default',
                meta: {
                    title: 'Список курсов',
                },
                component: CourseList
            },
            {
                path: ':id(\\d+)',
                name: 'course_view',
                meta: {
                    title: 'Просмотр курса',
                },
                component: Course,
            },
            {
                path: ':id(\\d+)/edit',
                meta: {
                    title: 'Редактирование курса',
                },
                name: 'course_edit',
                component: CourseEdit,
            },
            {
                path: 'add',
                meta: {
                    title: 'Добавление курса',
                },
                name: 'course_add',
                component: CourseEdit,
            },
        ]
    },
    {
        path: '/student',
        name: 'student_list',
        component: Wrapper,
        children: [
            {
                path: '',
                name: 'student_default',
                meta: {
                    title: 'Список студентов',
                },
                component: StudentList
            },
            {
                path: ':id(\\d+)/edit',
                name: 'student_edit',
                meta: {
                    title: 'Редактирование студента',
                },
                component: StudentEdit,
            },
            {
                path: 'add',
                name: 'student_add',
                meta: {
                    title: 'Добавление студента',
                },
                component: StudentEdit,
            },
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router
