
<template>
<div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-center">
        LOGIN - APP-TASKS
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <login @ra="login"></login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'todo-login',
  components: {
    Login
  },
  data () {
    return {
      ra: ''
    }
  },
  computed: {
  
  },
  methods: {
    login(ra) {
      let ra_logado = {'ra': ra, 'tarefas': []}
    }
  }
}
</script>

<style>
.card {
  border-radius: 10px;
}
.card-header-title {
  color: #636368;
}
</style>