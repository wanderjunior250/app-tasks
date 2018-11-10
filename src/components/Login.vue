<template>
  <div class="row">
    <div class="columns">
      <div class="column  is-half is-offset-one-quarter">
        <div class="field is-grouped">
          <p class="control is-expanded">
             <input class="input is-primary has-text-centered" type="text" placeholder="Digite seu RA" v-model="usuario">
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
const api = require('../controller/apiController.js');

export default {
  name: 'login',
  data () {
    return {
      usuario: ''
    }
  },
  methods: {
    logar() {
      if (this.usuario != '') {
        this.$emit('novoUsuario', this.usuario)
      };

      this.usuario = api.getUserByRA(this.usuario);

      new Vue({
        el: '#app',
        render: h => h(App)
      });
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