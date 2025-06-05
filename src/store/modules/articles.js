import { getArticles } from '@/api/articles'

export default {
  namespaced: true,
  state: () => ({
    articles: [],
    loading: false,
    error: null,
  }),
  mutations: {
    setArticles(state, articles) {
      state.articles = articles
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      commit('setLoading', true)
      try {
        const articles = await getArticles()
        commit('setArticles', articles)
        commit('setError', null)
      } catch (err) {
        commit('setError', err.message)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  getters: {
    filteredArticles: (state) => (search) => {
      return state.articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    }
  }
}
