<template>
    <div class="page-wrapper">
        <div class="header">
            <h1>Lucky Numbers</h1>
            <p>Choose your lucky number generator</p>
        </div>

        <div class="content">
            <div class="controls">
                <button @click="newVersion=!newVersion" class="toggle-btn">
                    Switch Version
                </button>
                <div class="version-buttons">
                    <button @click="newVersion=false" :class="{'active': !newVersion}" class="version-btn">
                        Version 1
                    </button>
                    <button @click="newVersion=true" :class="{'active': newVersion}" class="version-btn">
                        Version 2
                    </button>
                </div>
            </div>

            <div class="component-area">
                <keep-alive include="LuckyNumberV2">
                    <component :is="currentComponent"/>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, provide, computed } from "vue";

import LuckyNumber from "./LuckyNumber.vue";
import LuckyNumberV2 from "./LuckyNumberV2.vue";


const newVersion = ref(false);

const currentComponent=computed(()=>{
    return newVersion.value ? LuckyNumberV2 : LuckyNumber;
})

</script>

<style scoped>
.page-wrapper {
    min-height: 100vh;
    background: #f8f9fa;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header h1 {
    color: #333;
    margin: 0 0 10px 0;
    font-size: 2.2rem;
}

.header p {
    color: #666;
    margin: 0;
    font-size: 1.1rem;
}

.content {
    max-width: 800px;
    margin: 0 auto;
}

.controls {
    background: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.toggle-btn {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
}

.toggle-btn:hover {
    background: #0056b3;
}

.version-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.version-btn {
    padding: 10px 20px;
    border: 2px solid #ddd;
    background: white;
    color: #666;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
}

.version-btn:hover {
    border-color: #007bff;
    color: #007bff;
}

.version-btn.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
}

.component-area {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>