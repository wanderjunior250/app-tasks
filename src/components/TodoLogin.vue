
<template>
<div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">
        LOGIN - APP-TASKS
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <login @usuario="login"></login>
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
      usuario: ''
    }
  },
  computed: {
  
  },
  methods: {
    login(usuario) {
      let usuario_logado = {'ra': usuario, 'tarefas': []}
      this.tarefas.push(usuario_logado)
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