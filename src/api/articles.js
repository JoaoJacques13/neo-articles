import axios from 'axios'

export async function getArticles() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

    return data.map(article => ({
      id: article.id,
      title: article.title,
      summary: article.body.slice(0, 100) + '...',
      image: `https://picsum.photos/seed/${article.id}/400/200`,
      link: `https://jsonplaceholder.typicode.com/posts/${article.id}`
    }))
  } catch (error) {
    throw new Error('Erro ao carregar artigos.')
  }
}
