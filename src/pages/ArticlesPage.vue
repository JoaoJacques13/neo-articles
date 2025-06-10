<template>
  <v-container>
    <h1 class="text-h4 text-white mb-4">Artigos</h1>

    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
      <p class="text-white mt-2">Carregando artigos...</p>
    </div>

    <v-alert v-else-if="error" type="error" color="red" prominent class="mb-4">
      Erro ao carregar os artigos: {{ error }}
    </v-alert>

    <div v-else>
      <v-row>
        <v-col
          cols="12" sm="6" md="3" v-for="article in articles"
          :key="article.id"
        >
          <ArticleCard :article="article" />
        </v-col>
      </v-row>

      </div>
  </v-container>
</template>
  
<script setup>
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import ArticleCard from '@/components/ArticleCard.vue'
  
  const store = useStore()
  
  onMounted(() => {
    store.dispatch('articles/fetchArticles')
  })
  
  const loading = computed(() => store.state.articles.loading)
  const error = computed(() => store.state.articles.error)
  const articles = computed(() => store.state.articles.articles)
</script>
  