<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="14">
                <div class="container" v-if="course.video.indexOf('https://www.youtube.com/embed/') === 0">
                    <iframe :src="course.video" frameborder="0" class="video"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </div>
                <div v-else>Видео украли</div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="10">
                <p class="title">Дата начала: {{formatDate(course.date)}}</p>
                <p class="title">Тематика: {{course.theme}}</p>
                <p class="title">Описание:</p>
                <p class="text">{{course.description}}</p>
                <p class="title">Участники</p>
                <ul>
                    <li v-for="item in studentList" :key="item.name">{{item.name}}</li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import helper from "@/mixins/helper";

    export default {
        name: "Course",
        mixins: [helper],
        data() {
            return {
                course: {
                    id: 0,
                    theme: '',
                    name: '',
                    description: '',
                    date: '',
                    video: '',
                    student: []
                }
            }
        },
        computed: {
            studentList: function () {
                let studentList = Object.values(this.$store.getters.get_students)
                    .filter((value) => value !== null)
                    .filter((value) => this.course.student.includes(value.id))
                    .map(function (s) {
                        return {name: s.surname + ' ' + s.name + ' ' + s.middleName}
                    });
                return studentList;
            }
        },
        created() {
            let foundCourse = this.$store.getters.get_course[parseInt(this.$route.params.id)];
            if (foundCourse) {
                this.course = foundCourse;
                this.$route.meta.title = this.course.name;
                this.$router.replace({query: {temp: '123'}});
                this.$router.replace({query: {temp: undefined}});
            }
        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
    }

    .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .text {
        margin-bottom: 10px;
    }
</style>
