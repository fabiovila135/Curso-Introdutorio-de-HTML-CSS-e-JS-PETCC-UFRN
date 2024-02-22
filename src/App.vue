<script>
import BemVindo from './components/BemVindo.vue'
import CaixaMagica from './components/CaixaMagica.vue'
import OndeEstou from './components/OndeEstou.vue'

export default {
  name: 'App',
  components: {
    BemVindo,
    CaixaMagica,
    OndeEstou
  },
  data() {
    return {
      respostaCorreta: 'DIMAp',
      authenticated: false
    }
  }
}
</script>

<template>
  <main>
    <div class="container"> 
      <div class="TaylorCurtidas">
        <img alt="Vue logo" class="logo" src="https://www.bu.edu/files/2023/11/Taylor-Swift-Mania-feat.jpg" width="500" height="333" />
        <BemVindo> </BemVindo> 
      </div>

      <div class="magicbox"> 
        <CaixaMagica> </CaixaMagica>
      </div>

      <div class="pergunta">
        <OndeEstou> </OndeEstou>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border: solid 2px black;
}


  header {

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
 
  }
  
  container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }


</style>
