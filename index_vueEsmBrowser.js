import { createApp } from 'vue/dist/vue.esm-browser.js'

const Num = {
    props: {
        number: {
            type: Number,
            required: true
        }
    },
    template: `
        <button :class="getClass(number)" @click="handleClick"> 
            {{ number }}
        </button>
    `,
    methods: {
        handleClick() {
            console.log(this.number);
            this.$emit('choosen',  { number1 : this.number} );
        },
        getClass(number) {
            if(this.isEven(number)) {
                return 'red'
            }

            return 'blue'
        },
        isEven(count) {
            return count % 2 === 0;
        }
    },
}

const app = createApp({
    components: {
        Num
    },
    template: `
        <num v-for="number in numbers" :number="number" @choosen="putInArray"/>                                                                    
        <h3> Clicked Number </h3>
        <num v-for="number in clickedNumbers" :number="number" />                                                                    
    ` ,    

    computed: {
        // evenList() {
        //     return this.numbers.filter(num => {
        //         return this.isEven(num)
        //     });
        // },
        // error() {
        //     if(this.value.length < 7) {
        //         return 'Too Short'
        //     } 
        // }
    },
    data() {
        return {
            // count: 0,            
            // value: [],
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            clickedNumbers: []
            
        }
    }, 
    methods: {
        putInArray(number) {
            // console.log("it works")
            this.clickedNumbers.push(number.number1)
        },
        input($evt) {
            this.value = $evt.target.value;            
        },
        increment(val) {
            this.count += val
        },        
    },
}).mount('#app');

window.app = app