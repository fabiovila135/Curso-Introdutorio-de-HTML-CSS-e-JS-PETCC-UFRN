<template>
    <div id="curtidas"> 
        <h1 v-if="curtidas == 0"> A Taylor Swift não tem curtidas :c </h1>
        <h1 v-if="curtidas == 1"> A Taylor Swift tem {{ curtidas }} curtida </h1>
        <h1 v-if="curtidas > 1"> A Taylor Swift tem {{ curtidas }} curtidas </h1>
    </div>
    <button v-on:click="curtidas++"> Curtir </button>
</template>

<script>
export default {
    data() {
        return {
            curtidas: 0
        }
    },
    methods: {
        
    },
}
</script>

<style>
h1 {
    display: flex;
    align-items: center;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>