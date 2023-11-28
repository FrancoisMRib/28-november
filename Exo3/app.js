//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    tasks: [],
    valeurDeInput: '',
    toto:'LOL TOTO',
    maVariable: 'Le livre rouge' ,
    telephone: '0123456789' ,
    tableau: ['Felix Navidad', 713705] ,
};
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    //ajouterTask() {
    //this.tasks.push(this.valeurDeInput);
    //this.valeurDeInput = '';
    //},
    afficherLivreRandom() {
        const random = Math.random() ; 
        if (random > 0.5) {
            return "Le père Noël contre les martiens" ;
        } else {
            return "Le gendarme dans l'espace" ;
        }
    }
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');

