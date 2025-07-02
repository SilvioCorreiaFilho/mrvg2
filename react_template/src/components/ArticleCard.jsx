import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
  if (!article || !article.attributes) {
    return null;
  }

  const {
    title,
    slug,
    excerpt,
    publishDate,
    readingTime,
    views,
    featuredImage,
    category,
    author,
    tags,
  } = article.attributes;

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const imageUrl = featuredImage?.data?.attributes?.url || '/placeholder-image.jpg';
  const categoryName = category?.data?.attributes?.name || 'Geral';
  const authorName = author?.data?.attributes?.name || 'MRVG Advogados';

  return (
    <article className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
      {/* Featured Image */}
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--primary-dark)] text-white px-3 py-1 rounded-full text-sm font-medium">
            {categoryName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 line-clamp-2">
          <a href={`/blog/${slug}`} className="hover:text-[var(--primary-dark)] transition-colors">
            {title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-[var(--text-muted)] mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="fas fa-calendar mr-2"></i>
              {formatDate(publishDate)}
            </span>
            <span className="flex items-center">
              <i className="fas fa-clock mr-2"></i>
              {readingTime} min
            </span>
            {views > 0 && (
              <span className="flex items-center">
                <i className="fas fa-eye mr-2"></i>
                {views}
              </span>
            )}
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[var(--primary-dark)] rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
              {authorName.charAt(0)}
            </div>
            <span className="text-[var(--text-secondary)] text-sm">
              {authorName}
            </span>
          </div>

          {/* Read More Button */}
          <a
            href={`/blog/${slug}`}
            className="text-[var(--primary-dark)] font-medium text-sm hover:text-[var(--secondary-gold)] transition-colors"
          >
            Ler mais →
          </a>
        </div>

        {/* Tags */}
        {tags?.data && tags.data.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {tags.data.slice(0, 3).map((tag) => (
                <span
                  key={tag.id}
                  className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                >
                  #{tag.attributes.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      readingTime: PropTypes.number,
      views: PropTypes.number,
      featuredImage: PropTypes.object,
      category: PropTypes.object,
      author: PropTypes.object,
      tags: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default ArticleCard;
