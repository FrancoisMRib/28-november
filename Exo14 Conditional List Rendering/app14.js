const app = Vue.createApp({
    data() {
        return {
        nomProduit: '',
        listeDesCourses: [],
        nomClasse: '',
        laCouleur: '',
        visible: true,
        };
    },
    // Cette ligne de computed est hyper importante sinon la fonction masquerListe marche pas
    computed : {
        messageButton() {
            return this.visible ? 'Masquer liste' : 'Afficher liste'
        }
    },
    methods: {
        ajouterProduit() {
        this.listeDesCourses.push(this.nomProduit);
        // this.nomFilm = '';
        },
        masquerListe() {
            console.log("test");
            this.visible = !this.visible;
        },
        supprimerProduit(unIndex) {
            this.listeDesCourses.splice(unIndex, 1);
        }
    },
    });
    app.mount('#monApp');