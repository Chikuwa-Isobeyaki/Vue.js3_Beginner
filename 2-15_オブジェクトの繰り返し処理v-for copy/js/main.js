const app = Vue.createApp({
  data: () =>({
    user: {
      firstName: 'Taro',
      lastName: 'Yamamda',
      age: 23
    }
  })
})

app.mount('#app')

