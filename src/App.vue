<template>
  <div id="app">
    <el-header>
      <ul>
        <li>
          <router-link :to="{name: 'course_default'}">Курсы</router-link>
        </li>
        <li>
          <router-link :to="{name: 'student_default'}">Студенты</router-link>
        </li>
      </ul>
    </el-header>
    <el-main>
      <h1>{{ $route.meta.title }}</h1>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeCreate() {
      this.$store.commit('initStore');
    }
  }
</script>
<style>
</style>
