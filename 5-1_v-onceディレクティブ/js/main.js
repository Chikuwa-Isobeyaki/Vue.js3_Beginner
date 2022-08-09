const app = Vue.createApp({
  data: () =>({
    message: 'Hello Vue.js!!'
  }),
  methods: {
    clickHandler: function(event) {
      console.log(event)
      this.message = this.message.split('').reverse().join('')
    }
  }
})

app.mount('#app')


