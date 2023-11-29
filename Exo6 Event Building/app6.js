Vue.createApp({
    data() {
        return {
        valeurDeInput: '',
        valeurDeInput2: '',
    };
    },
    methods: {
        ajouterTexte(event) {
            this.valeurDeInput = event.target.value ;
            //return this.valeurDeInput ;
        },
        ajouterTexte2(event) {
            this.valeurDeInput2 = event.target.value ;
            //return this.valeurDeInput2 ;
        },
        grosseAlerte() {
            alert ("Attention !!")
        },
       
    },
   
}).mount('#app');
        