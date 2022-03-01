const app = Vue.createApp({
    data(){
        return{
            name: 'Philip Nettelblad',
            email: 'PhilKnox@gmail.com',
            pic: 'https://snusfabriken.com/wp-content/uploads/2021/01/9557_Knox_Blue_stark_White-1.png'

        }
    },
    methods:{
       async getUser(){
           const res = await fetch('https://randomuser.me/api')
           const { results } = await res.json()

           console.log(results)
            this.name = results[0].name.first
            this.email = results[0].email
            this.pic = results[0].picture.large    
        },
    },
})
app.mount('#app')