<template>
    <el-form ref="form" :model="course" label-width="120px">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <el-form-item label="Название" prop="name"
                              :rules="[{ required: true, message: 'Где название?', trigger: 'blur' }]">
                    <el-input v-model="course.name"></el-input>
                </el-form-item>
                <el-form-item label="Тематика" prop="theme"
                              :rules="[{ required: true, message: 'Где тематика?', trigger: 'blur' }]">
                    <el-input v-model="course.theme"></el-input>
                </el-form-item>
                <el-form-item label="Дата старта" prop="date"
                              :rules="[{ required: true, message: 'Где дата?', trigger: 'blur' }]">
                    <el-date-picker v-model="course.date" type="date" format="dd.MM.yyyy"
                                    style="width: 100%"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
                <el-form-item label="Описание" prop="description"
                              :rules="[{ required: true, message: 'Где описание?', trigger: 'blur' }]">
                    <el-input v-model="course.description" type="textarea" autosize :rows="3"></el-input>
                </el-form-item>
                <el-form-item label="Видео" prop="video"
                              :rules="[{ required: true, message: 'Где ссылка?', trigger: 'blur' }]">
                    <el-input v-model="course.video" placeholder="https://www.youtube.com/embed/XXXXXX"></el-input>
                </el-form-item>
                <el-form-item label="Учащиеся" prop="student">
                    <el-select v-model="course.student" multiple filterable placeholder="" style="width: 100%">
                        <el-option v-for="item in course.studentSelect" :key="item.id" :label="item.value"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item>
            <el-button type="danger" v-if="course.id > 0" @click="onRemove">Удалить</el-button>
            <el-button type="primary" @click="onSubmit" style="float: right; margin-left: 10px;">Сохранить
            </el-button>
            <el-button @click="$router.back()" style="float: right">Отменить</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import storeSubscribe from "@/mixins/storeSubscribe";

    export default {
        name: "CourseEdit",
        mixins: [storeSubscribe],
        data() {
            return {
                course: {
                    id: 0,
                    theme: '',
                    name: '',
                    description: '',
                    date: '',
                    video: '',
                    student: [],
                    studentSelect: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('add_course', this.course);
                        this.$router.back()
                    } else {
                        return false;
                    }
                });
            },
            onRemove() {
                if (this.course.id > 0) {
                    this.$store.dispatch('remove_course', this.course);
                    this.$router.back()
                }
            },
            setStudentSelect() {
                let allStudent = Object.values(this.$store.getters.get_students).filter((value) => value !== null);
                if (allStudent.length > 0) {
                    this.course.studentSelect = allStudent.map(function (s) {
                        return {id: s.id, value: s.surname + ' ' + s.name + ' ' + s.middleName}
                    });
                }
            },
            checkRemoved() {
                this.course.student = this.course.student.filter((value) => this.$store.getters.get_students[value] !== null);
            }
        },
        created() {
            let foundCourse = this.$store.getters.get_course[parseInt(this.$route.params.id)];
            if (foundCourse) {
                this.course = foundCourse;
            }
            this.setStudentSelect();
            this.checkRemoved()
        }
    }
</script>

<style scoped>

</style>
