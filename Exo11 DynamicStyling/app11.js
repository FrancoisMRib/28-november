Vue.createApp({
    data() {
        return {
            input1 : '',
            hello : false,
            world : false,
            inputColor : '',
            hidden: false,
            visible: true,
            button: false
        };
    },
    methods: {
        premierInput() {
            if(this.input1 === "hello") {
                this.hello = true ;
            } 
            else if (this.input1 === "world") {
                this.world = true ;
            } 
            else {
                this.hello = false ;
                this.world = false ;
            }
        },
        btnHide() {
            // if (this.hidden === false && this.visible === true) {
            //     this.hidden = true ;
            //     this.visible = false ;
            // }
            console.log("test");
            return this.button = !this.button ;
        }
        
    },

    }).mount('#monApp');

/* CORRECTION
const app = Vue.createApp({
    data() {
        return {
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
        affichage() {
        this.visible = !this.visible;
        },
    },
    });
    app.mount('#monApp');
*/