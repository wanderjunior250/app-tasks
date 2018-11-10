<template>
  <div class="row">
    <div class="columns">
      <div class="column  is-half is-offset-one-quarter">
        <div class="field is-grouped">
          <p class="control is-expanded">
             <input class="input is-primary has-text-centered" type="text" placeholder="Digite seu RA" v-model="usuarioLogado">
          </p>
          <p class="control">
            <a class="button is-success add-button" id="add"  @click="logar">
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
import App from '../App.vue';
import Vue from 'vue';
const axios = require('axios');

export default {
  name: 'login',
  data () {
    return {
      usuarios: [],
      usuarioLogado: ''
    }
  },
  mounted () {
    axios.get('/user').then(response => {
      this.usuarios = response.data
    })
  },
  methods: {
    logar() {
      console.log(this.usuarios);
      if (this.usuarioLogado != '') {
        let i;
        let x = false;
        console.log(this.usuarios.length);
        console.log(this.usuarios);
        for (i = 0; i <= this.usuarios.length; i++) {
            if (this.usuarios[i].ra == this.usuarioLogado) {
              console.log(this.usuarios[i].ra);
              this.usuarioLogado = {
                ra: this.usuarios[i].ra,
                _id: this.usuarios[i]._id,
                tasks: this.usuarios.tasks
                };
              x = true;
            };

          console.log(x);
          if (x == false) {
            console.log("ENTREI NO POST");
            axios.post('/user', {
              ra: this.usuarioLogado,
              tasks: []
            });
          }
          new Vue({
            el: '#app',
            render: h => h(App)
          });
        };
      }
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