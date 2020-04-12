<template>
    <div>
        <el-button type="primary" style="float: right;" @click="$router.push({ name: 'course_add'})">Добавить
            курс
        </el-button>
        <el-table v-if="tableData.length > 0" :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="70"></el-table-column>
            <el-table-column prop="name" label="Название курса">
                <template slot-scope="scope">
                    <router-link :to="{name: 'course_view', params: {id: scope.row.id}}">{{scope.row.name}}
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="theme" label="Тематика курса"></el-table-column>
            <el-table-column prop="date" label="Дата старта">
                <template slot-scope="scope">{{formatDate(scope.row.date)}}</template>
            </el-table-column>
            <el-table-column width="120px">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle
                               @click="editCourse(scope.$index, tableData)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle
                               @click="removeCourse(scope.$index, tableData)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import helper from "@/mixins/helper";
    import storeSubscribe from "@/mixins/storeSubscribe";

    export default {
        name: "CourseList",
        mixins: [helper, storeSubscribe],
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            editCourse(id, data) {
                this.$router.push({name: 'course_edit', params: {id: data[id].id}})
            },
            removeCourse(id, data) {
                this.$store.dispatch('remove_course', data[id]);
                this.getCourse()
            },
            getCourse() {
                this.tableData = Object.values(this.$store.getters.get_course).filter((value) => value !== null);
            }
        },
        created() {
            this.getCourse()
        }
    }
</script>

<style scoped>

</style>
