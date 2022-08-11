const app = Vue.createApp({
  data: () =>({
    message: ''
  }),

  methods: {
    clickHandler: function($event, message) {
      console.log(message)
      console.log($event)
      this.message = message
    }
  }
})

app.mount('#app')


