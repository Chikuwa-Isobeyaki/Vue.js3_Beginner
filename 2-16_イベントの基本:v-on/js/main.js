const app = Vue.createApp({
  data: () =>({
    now: '_'
  }),
  methods: {
    onClick: function() {
      this.now = new Date().toLocaleString()
    }
  }
})

app.mount('#app')

