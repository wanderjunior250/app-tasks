<template>
  <div class="row">
    <div class="columns">
      <div class="column  is-half is-offset-one-quarter">
        <div class="field is-grouped">
          <p class="control is-expanded">
             <input class="input is-primary has-text-centered" type="text" placeholder="Digite seu RA" v-model="ra">
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
const axios = require('axios');

export default {
  name: 'login',
  data () {
    return {
      usuarios: [],
      ra: '',
      id: '',
      tarefas: []
    }
  },
  created () {
    axios.get('/user').then(response => {
      this.usuarios = response.data
    });
  },
  methods: {
    logar() {
      var x = false;
      if (this.ra != '') {
        let i;
        for (i = 0; i < this.usuarios.length; i++) {
          if (this.usuarios[i].ra == this.ra) {
            this.ra = this.usuarios[i].ra;
            this.id = this.usuarios[i]._id;
            this.tarefas = this.usuarios[i].tasks;
            x = true;
            i = this.usuarios.length;
          };
        };

        if (x == false) {
          console.log("ENTREI NO POST");
          axios.post('/user', {
            ra: this.ra,
            tasks: []
          }).then(function (response) {
            if (response.status == 200) {
              this.id = response.data._id;
            }
          });
        };
      };

      localStorage.setItem('loggedUser', this.id);
      this.$router.replace('/tarefas');
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