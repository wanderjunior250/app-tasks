import Vue from 'vue'
import App from './Login.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

const app = require('./src/app');

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`app listening on port ${port}`)
});


