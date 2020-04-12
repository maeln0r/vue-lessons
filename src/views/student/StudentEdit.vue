<template>
    <div>
        <el-form ref="form" :model="student" label-width="120px">
            <el-form-item label="Фамилия" prop="surname"
                          :rules="[{ required: true, message: 'Где фамилия?', trigger: 'blur' }]">
                <el-input v-model="student.surname"></el-input>
            </el-form-item>
            <el-form-item label="Имя" prop="name"
                          :rules="[{ required: true, message: 'Где имя?', trigger: 'blur' }]">
                <el-input v-model="student.name"></el-input>
            </el-form-item>
            <el-form-item label="Отчество" prop="middleName"
                          :rules="[{ required: true, message: 'Где отчество?', trigger: 'blur' }]">
                <el-input v-model="student.middleName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" v-if="student.id > 0" @click="onRemove">Удалить</el-button>
                <el-button @click="$router.back()" style="float: right">Отменить</el-button>
                <el-button type="primary" @click="onSubmit" style="float: right">Сохранить</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import storeSubscribe from "@/mixins/storeSubscribe";

    export default {
        name: "StudentEdit",
        mixins: [storeSubscribe],
        data() {
            return {
                student: {
                    id: 0,
                    surname: '',
                    name: '',
                    middleName: '',
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('add_student', this.student);
                        this.$router.back()
                    } else {
                        return false;
                    }
                });
            },
            onRemove() {
                if (this.student.id > 0) {
                    this.$store.dispatch('remove_student', this.student);
                    this.$router.back()
                }
            }
        },
        created() {
            let foundStudent = this.$store.getters.get_students[parseInt(this.$route.params.id)];
            if (foundStudent) {
                this.student = foundStudent
            }
        }
    }
</script>

<style scoped>

</style>
