<template>
    <div class="bg-black text pt-3" :style="{ height: '100vh' }">
        <h1 class="text-center text-success">ContactOPedia</h1>

        <div class="container p-4">
            <button class="btn btn-primary text-black m-2"
            @click="newVersion=!newVersion">
                Toggle component
            </button>
            <br/>
            <button class="btn btn-primary text-black m-2" @click="newVersion=false">
                Lucky Number V1
            </button>
            <button class="btn btn-primary text-black m-2" @click="newVersion=true">
                Lucky Number V2
            </button>

            <!-- <LuckyNumber></LuckyNumber>
            <br />
            <LuckyNumberV2></LuckyNumberV2> -->

            <component :is="currentComponent"/>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive, provide, computed } from "vue";

import LuckyNumber from "./components/LuckyNumber.vue";
import LuckyNumberV2 from "./components/LuckyNumberV2.vue";


const newVersion = ref(false);

const currentComponent=computed(()=>{
    return newVersion.value ? LuckyNumberV2 : LuckyNumber;
})

</script>

<style></style>