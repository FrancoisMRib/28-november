Vue.createApp({
    data() {
        return {
            valeur: 0,

        };
    },
    methods: {
        increase() {
            return this.valeur = this.valeur +1 ;
        },
        decrease() {
            return this.valeur = this.valeur -1 ;
        }
    }
}).mount('#app');