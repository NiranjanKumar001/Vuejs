<template>
    <div>
       {{message}}
    </div>
    <contact-us></contact-us>
    <button-counter></button-counter>
</template>

<script>
import ButtonCounter from './components/ButtonCounter.vue';

    export default{
        setup(){
            const message="hello vue";
            return{
                message
            };
        }
    }
</script>

<style>

</style>