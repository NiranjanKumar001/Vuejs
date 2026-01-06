<template>
    <div>
        <h1>contact us</h1>
        <p>please send email on {{email}}</p>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        setup(){
            const email=ref("something@email.com");
            return{
                email
            };
        }
    }
</script>