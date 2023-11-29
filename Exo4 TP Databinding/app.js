//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        valeurDeInput: 'Mario',
        age: 45,

    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        nom() {
            return valeurDeInput ;
        },
        augmenterAge() {
            return this.age + 10 ;
        },
        afficherNombreFetiche() {
            const random = Math.random() ; 
            return random.toFixed(7) ;
        }
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');
    