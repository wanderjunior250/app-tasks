<template>
    <div id="app">
      <section class="hero is-primary is-bold is-fullheight">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  Task List 1.0
                </a>
              </div>
            </div>
          </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="row">
              <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                  <div class="card">
                        <header class="card-header">
                        <p class="card-header-title has-text-centered">
                            Cadastro efetuado com sucesso!
                        </p>
                        </header>
                        <div class="card-content">
                            <router-link class="button is-primary" to="/login">Realizar login</router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Task List</strong> by <a href="http://github.com/wanderjunior250">Wander Junior</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'registrado',
  data () {
    return {
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