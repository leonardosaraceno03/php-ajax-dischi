var app = new Vue({
    el: '#app',
    data: {
        arrayDischi: [],
    },
    mounted() {
        axios.get('./api/index.php').then((response) => {
            
            this.arrayDischi = response.data;

            console.log(this.arrayDischi);

        })
    },
    methods: {

    }
})