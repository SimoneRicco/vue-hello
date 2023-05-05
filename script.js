const app = Vue.createApp({
    data(){
        return{
            message: "Hello from VueJs",
            link: "https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg"
        }
    }
});

app.mount('#app');