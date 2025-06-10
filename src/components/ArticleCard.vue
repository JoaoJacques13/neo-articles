<template>
  <v-card class="article-card-hover mb-4 pa-1" color="#1e1e1e" height="100%">
    <v-img :src="article.image" height="250px" cover />
    <v-card-title class="text-white">{{ article.title }}</v-card-title>
    <v-card-text class="text-white">{{ truncatedSummary }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="readMore">
        Ler mais
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
  
<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router'; 

  const props = defineProps({
    article: Object
  });

  const router = useRouter();

  const truncatedSummary = computed(() => {
    if (props.article && props.article.summary && props.article.summary.length > 100) {
      return props.article.summary.substring(0, 100) + '...';
    }
    return props.article.summary || '';
  });

  const readMore = () => {
    router.push({ name: 'ArticleDetail', params: { id: props.article.id } });
  };
</script>

<style scoped>
  .article-card-hover {
    transition: transform 0.4s ease-in-out, padding 0.4s ease-in-out;
    padding: 4px !important; 
  }

  .article-card-hover:hover {
    transform: scale(1.03); 
    padding: 0px !important; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4) !important;
  }
</style>