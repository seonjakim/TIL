const app = Vue.createApp({
  template: '<h1>hello world {{firstName}}</h1>',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
    }
  },
})

app.mount('#app')
