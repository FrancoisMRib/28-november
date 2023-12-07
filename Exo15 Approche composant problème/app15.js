Vue.createApp({
    data() {
        return {
            detailsVisibles : false,
            lesAmis : [{
                id :'FR', 
                nom :'François', 
                tel : 'tel' , 
                mail : 'ribere@yahoo.fr'},
                {
                id : 'DB', 
                nom : 'Daniel', 
                tel : 'tel' , 
                mail : 'dany@yahoo.fr'}
            ],
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisibles = !this.detailsVisibles ;
        }
    },

}).mount('#monApp');