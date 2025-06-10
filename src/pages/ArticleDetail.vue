<template>
  <v-container class="article-detail-page">
    <v-btn color="primary" @click="goBack" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon> Voltar para Artigos
    </v-btn>

    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
      <p class="text-white mt-2">Carregando detalhes do artigo...</p>
    </div>

    <v-alert v-else-if="error" type="error" color="red" prominent class="mb-4">
      Erro ao carregar o artigo: {{ error }}
    </v-alert>

    <v-card v-else-if="article" class="pa-5" color="#1e1e1e">
      <v-card-title class="text-h4 text-white mb-2">{{ article.title }}</v-card-title>
      <v-card-text class="text-body-1 text-white">
        {{ article.summary }}
        <p class="mt-4 text-caption text-grey">ID do Artigo: {{ article.id }}</p>
      </v-card-text>
    </v-card>

    <v-alert v-else type="info" color="blue" prominent class="mb-4">
      Artigo não encontrado.
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const articleId = computed(() => route.params.id);
const article = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  if (articleId.value) {
    try {
      const foundArticle = store.getters['articles/getArticleById'](articleId.value);

      if (foundArticle) {
        article.value = foundArticle;
      } else {
        await store.dispatch('articles/fetchArticles');
        article.value = store.getters['articles/getArticleById'](articleId.value);
      }
      loading.value = false;
    } catch (err) {
      error.value = err.message || 'Não foi possível carregar o artigo.';
      loading.value = false;
    }
  } else {
    error.value = 'ID do artigo não fornecido.';
    loading.value = false;
  }
});

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.article-detail-page {
  max-width: 800px;
  margin: 2rem auto;
  color: white;
}
</style>