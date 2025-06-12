<template>
  <v-container fluid class="home-page d-flex flex-column justify-center align-center text-center">
    <h1 class="text-h2 text-white mb-4 animate__animated animate__fadeInDown">
      Bem-vindo ao Neo Gerenciador de Artigos!
    </h1>
    <p class="text-h5 text-grey-lighten-1 mb-8 animate__animated animate__fadeInUp">
      Explore um mundo de conhecimento e notícias.
    </p>
    <v-btn
      color="primary"
      size="x-large"
      class="animate__animated animate__zoomIn"
      @click="goToArticles"
    >
      Ver Artigos Agora
      <v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToArticles = () => {
    router.push('/articles');
  };
</script>

<style scoped>
  .home-page {
    min-height: calc(100vh - 64px);
  }

  .animate__animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animate__fadeInDown {
    animation-name: fadeInDown;
  }
  .animate__fadeInUp {
    animation-name: fadeInUp;
  }
  .animate__zoomIn {
    animation-name: zoomIn;
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translate3d(0, -20px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translate3d(0, 20px, 0); }
    to { opacity: 1; transform: translate3d(0, 0, 0); }
  }
  @keyframes zoomIn {
    from { opacity: 0; transform: scale3d(.3, .3, .3); }
    50% { opacity: 1; }
  }
</style>