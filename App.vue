<template> 
    <form @submit.prevent="submit" class="form">
    <my-input 
    name="username"
    :rules="{ required: true, min: 5 }"
    :value="username.value"
    @update="update"
    type="text"
    />

    <!-- {{ username }} -->

    <my-input 
    name="Password"
    :rules="{ required: true, min: 10 }"
    :value="password.value"
    @update="update"
    type="password"
    />

    <!-- {{ password }} -->

    <MyButton 
        color="white"
        background="darkslateblue"
        :disabled="!valid"
    />
    </form>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
    components: {
        MyButton,
        MyInput
    },
    data() {
        return {            
            username: {
                value: '',
                valid: false
            },
            password: {
                value: '',
                valid: false
            },
        }
    },
    methods: {
        submit($evt) {
            // $evt.preventDefault();
            console.log('submit');
        },  
        update(payload) {
            this[payload.name.toLowerCase()] = {
                value: payload.value,
                valid: payload.valid
            }
        }
    },
    computed: {
        valid() {
            return this.username.valid && this.password.valid
        }
    }
}
</script>

<style>
    body {
        font-family: Arial;
    }

    .form {
        max-width: 400px;
        width: 50%;
    }
</style>