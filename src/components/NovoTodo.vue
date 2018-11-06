<template>
  <div class="row">
    <div class="columns">
      <div class="column  is-half is-offset-one-quarter">
        <div class="field is-grouped">
          <p class="control is-expanded">
             <input class="input is-primary has-text-centered" id="nomeTarefa" name="taskName" type="text" placeholder="Nova tarefa..." v-model="tarefa">
             <input class="input is-primary has-text-centered" id="data" name="executionDate" type="date" v-model="execucao">
          </p>
          
          <p class="control">
            <a class="button is-success add-button" id="add" @click="enviarTarefa">
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'novo-todo',
  data () {
    return {
      tarefa: '',
      execucao: ''
    }
  },
  methods: {
    enviarTarefa() {
      if (this.tarefa != '' && this.execucao != '') {
        this.$emit('novaTarefa', this.tarefa,this.execucao)
      }
      this.tarefa = ''
      this.execucao = ''
    }
    
  }
  
}

</script>

<style scoped>
.input {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  outline: none;
  border-bottom-width: 2px;
  box-shadow: none;
}
.input.is-primary:focus {
  box-shadow: none;
}
.add-button {
  border-radius: 50%;
}
</style>