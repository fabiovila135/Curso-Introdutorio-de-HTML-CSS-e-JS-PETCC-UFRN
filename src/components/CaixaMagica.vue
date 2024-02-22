<template>
    <div id="container">
        <button class="botao" v-on:click="click"> Caixa Mágica </button>
        <div id="caixafora">
        <div v-if="visibilidade" id="caixaMagica" :style="{backgroundColor: cor}" > </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clicks: 0,
            visibilidade: false,
            cor: 'purple',
        }
    },
    methods: {
        click(){
            this.visibilidade = !this.visibilidade
            this.clicks++
            if (this.clicks > 10) {
                this.cor = 'red'
            }
        },
    },
}
</script>

<style>
#caixaMagica{

    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;   
}

#caixafora {
    background-color: violet;
    display: flex;
    justify-content: center;
    align-items: center;  
}

button {
    display: flex;
    justify-content: center;
    align-items: center; 
}
</style>

