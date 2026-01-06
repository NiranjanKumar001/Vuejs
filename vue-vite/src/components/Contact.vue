<template>
    <div  class="bg-info p-3 m-3 border rounded">
        <h3>Name: {{ props.name }}</h3>
        <p>Email : {{ email }}</p>
        <p>Phone : {{ props.phone }}</p>
    </div>
</template>

<!-- <script>
    import { ref } from "vue";
    export default {
        setup(){
            const email=ref("something@email.com");
            return{
                email
            };
        }
    }
</script> -->

<!-- better way which vue provides -->

<script setup>
    import {ref,defineProps} from "vue";
    const count =ref(0);
    const email=ref("something@email.com");
    const props =defineProps([
        "name",
        "phone"
    ])
</script>