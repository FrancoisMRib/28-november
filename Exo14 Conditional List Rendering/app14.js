const app = Vue.createApp({
    data() {
        return {
        nomFilm: '',
        mesFilms: [],
        nomClasse: '',
        laCouleur: '',
        visible: true,
        };
    },
    computed: {
        //!Version optimisé en passant par une fonction
        //!Computed pour pas avoir d'interférences avec la ƒ° toggle
        classDynamique() {
        return{
          maClasseHello: this.nomClasse ==='hello',
          maClasseWorld: this.nomClasse ==='world',
          maClasseHidden: !this.visible,
          maClasseVisible: this.visible
        }

        //? première version
        // if (this.nomClasse === 'hello') {
        //     return 'maClasseHello';
        // }
        // if (this.nomClasse === 'world') {
        //     return 'maClasseWorld';
        // }
        // if (this.visible) {
        //     return 'maClasseVisible';
        // }
        // if (!this.visible) {
        //     return 'maClasseHidden';
        // }
        },
        
    },
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.nomFilm);
        // this.nomFilm = '';
        },
        masquerListe() {
            console.log("test");
            if (this.visible = !this.visible) {
                document.getElementById("masquaff") {
                    
                }
            };
        }
    },
    });
    app.mount('#monApp');