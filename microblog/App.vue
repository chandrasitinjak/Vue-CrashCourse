<template>
    <input type="text" :value="currentHashtag" @input="setHashtag"/>
    <card v-for="post in filteredPosts" >                    
         <template v-slot:title>
                 {{ post.title }}
            </template>
            <template v-slot:content> 
                {{ post.content }}
            </template>
            <template v-slot:description>
                <controls 
                    :post="post"                     
                 />
                 <!-- @setHashtag="setHashtag"  -->
            </template>
    </card>
</template>

<script>
import { ref, computed } from 'vue'
import { store } from './store'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
 
export default {

    components: {
        Card,
        Controls
    },
    emits: ["setHashtag"],
    setup() {
        // const currentHashtag = ref()

        // const setHashtag = (tag) => {
        //     currentHashtag.value = tag
        // }

        // const filteredPosts = computed(() => {

            // if(!store.state.currentHashtag) {
            //     return store.state.posts
            // }

            
            // return store.state.posts.filter(
            //     post => post.hashtags.includes(store.state.currentHashtag)                                    
            // )

            // if(!currentHashtag.value) {
            //     return store.state.posts
            // }
            // return store.state.posts.filter(post => {
            //     if(post.hashtags.includes(currentHashtag.value)) {
            //         return true
            //     }
            //     return false
            // })            
        // })

        const setHashtag = (evt) => {
                store.setHashtag(evt.target.value)
            }

        return {
            // store,
            // setHashtag,
            // currentHashtag,
            filteredPosts: store.filteredPosts,
            setHashtag,
            currentHashtag: computed(() => store.state.currentHashtag)
            
        }
    }    
}
</script>

<style scoped>
    
</style>