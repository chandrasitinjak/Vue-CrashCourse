<template>
    <div class="like">
    <button @click="like"> Like  </button>

    <div>
        {{ post.likes  }} 
    </div>
    </div>
    <hashtag 
    v-for="tag in post.hashtags"
    :hashtag="tag" 
    />
    
    <!-- @setHashtag="setHashtag"/>       -->
    
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from './store'

export default {
    components: { Hashtag },
    props: {
        post: {
            type: Object
        }
    },

    setup(props) {
         const like = () => {
             store.incrementLike(props.post)
         }

         return {
             like
         }
    }
    // emits: ["setHashtag"],
    // setup(props, ctx) {
    //     const setHashtag = (tag) => {      
    //         // console.log(tag)      
    //         ctx.emit('setHashtag', tag)
    //     }

    //     return {
    //         setHashtag
    //     }
    // }
}
</script>

<style scoped>
    .like {
        display: flex;
        justify-content: center;
        margin: 10px;

    }
</style>