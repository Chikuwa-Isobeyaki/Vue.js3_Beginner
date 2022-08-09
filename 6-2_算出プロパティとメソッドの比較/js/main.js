const app = Vue.createApp({
  data: () =>({
    message: 'Hello Vue.js!!'
  }),
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod : function() {
      return this.message.split('').reverse().join('')
    }
  }
})

app.mount('#app')


// プロパティとメソッドの違い

// 1.computedは()が不要

// 2.computed->getter,setter
//   method->getter

// 3.computed->キャッシュ有り
//   method->キャッシュなし


