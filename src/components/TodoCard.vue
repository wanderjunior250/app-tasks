
<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">
       {{hoje}}
      </p>
      <div class="has-text-right">
        <p class="card-header-title">{{tarefas.length}} tarefas</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <novo-todo @novaTarefa="adicionarTarefa"></novo-todo>
      </div>
      <div class="content">
        <todo-list :tarefas="tarefas" @check="checkTarefa" @remover="removerTarefa"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import NovoTodo from './NovoTodo'
import TodoList from './TodoList'
import Login from './Login'
const axios = require('axios');

export default {
  name: 'todo-card',
  components: {
    NovoTodo,
    TodoList,
    Login
  },
  data () {
    return {
      dias: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      tarefas: [],
      ra: '',
      id: ''
    }
  },
  created () {
    this.id = localStorage.getItem('loggedUser');
    axios.get('/user/' + this.id).then(response => {
      this.ra = response.data.ra;
      this.tarefas = response.data.tasks;
    });
  },
  computed: {
    hoje: function() {
      let novaData = new Date()
      return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${this.meses[novaData.getMonth()]}`
    }
  },
  methods: {
    adicionarTarefa(tarefa) {
      let nova_tarefa = {'description': tarefa, 'checked': false};
      this.tarefas.push(nova_tarefa);
      axios.put('/user/' + this.id, {
        ra: this.ra,
        tasks: this.tarefas
      }).then(function (response) {
        if (response.status == 200) {
          console.log('update com sucesso!')
        }
      });
    },
    checkTarefa(index) {
      this.tarefas[index]['checked'] = !this.tarefas[index]['checked'];
      axios.put('/user/' + this.id, {
        ra: this.ra,
        tasks: this.tarefas
      }).then(function (response) {
        if (response.status == 200) {
          console.log('update com sucesso!')
        }
      });
    },
    removerTarefa(index){
      this.tarefas.splice(index,1);
      axios.put('/user/' + this.id, {
        ra: this.ra,
        tasks: this.tarefas
      }).then(function (response) {
        if (response.status == 200) {
          console.log('update com sucesso!')
        }
      });
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