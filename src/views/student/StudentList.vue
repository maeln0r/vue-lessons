<template>
    <div>
        <el-button type="primary" style="float: right;" @click="$router.push({ name: 'student_add'})">Добавить
            студента
        </el-button>
        <el-table v-if="tableData.length > 0" :data="tableData" style="width: 100%" row-key="id">
            <el-table-column prop="id" label="ID" width="70px"></el-table-column>
            <el-table-column prop="surname" label="Фамилия"></el-table-column>
            <el-table-column prop="name" label="Имя"></el-table-column>
            <el-table-column prop="middleName" label="Отчество"></el-table-column>
            <el-table-column width="120px">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle
                               @click="editStudent(scope.$index, tableData)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle
                               @click="removeStudent(scope.$index, tableData)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import storeSubscribe from "@/mixins/storeSubscribe";

    export default {
        name: "StudentList",
        mixins: [storeSubscribe],
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            editStudent(id, data) {
                this.$router.push({name: 'student_edit', params: {id: data[id].id}})
            },
            removeStudent(id, data) {
                this.$store.dispatch('remove_student', data[id]);
                console.log(this.$store.getters.get_students)
            },
            getStudents(){
                this.tableData = Object.values(this.$store.getters.get_students).filter((value) => value !== null);
            }
        },
        created() {
            this.getStudents()
        }
    }
</script>

<style scoped>

</style>
