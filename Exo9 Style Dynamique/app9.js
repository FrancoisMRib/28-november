Vue.createApp({
    data() {
        return {
            selectCard1: false,
            selectCard2: false,
            /*
            styleObject: {
                color: 'red',
                fontSize: '53px'
            }*/
        };
    },
    methods: {
        selectionCard(uneCard) {
        if (uneCard === 1) {
            this.selectCard1 = !this.selectCard1 ;
            /*if (this.selectionCard = false) {
                this.selectCard1 = true ;
            } else (this.selectionCard = true) {
                this.selectCard1 = false ;
            }*/;
        } if (uneCard === 2) {
            //ORIGINALE = this.selectCard2 = true;
            this.selectCard2 = !this.selectCard2 ;
        }
        },
    },
    }).mount('#monApp');