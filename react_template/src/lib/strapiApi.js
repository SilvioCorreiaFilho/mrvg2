import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const strapiApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch latest articles for homepage
export const getLatestArticles = async (limit = 6) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        populate: ['featuredImage', 'category', 'author'],
        sort: 'publishDate:desc',
        'pagination[limit]': limit,
        'filters[publishedAt][$notNull]': true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest articles:', error);
    return { data: [] };
  }
};

// Fetch article by slug
export const getArticleBySlug = async (slug) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        'filters[slug][$eq]': slug,
        populate: ['featuredImage', 'category', 'author', 'tags'],
      },
    });
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
};
