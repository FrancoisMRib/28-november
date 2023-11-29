Vue.createApp({
    data() {
        return {
            valeur: 0,

        };
    },
    methods: {
        increase() {
            return this.valeur = this.valeur +1 ;
            //this.valeur ++;
        },
        decrease() {
            return this.valeur = this.valeur -1 ;
            //this.valeur --;
        }
    }
}).mount('#app');