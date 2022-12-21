import React from 'react';
import NewsItem from './NewsItem';
import Pagination from './Pagination';

function NewsList({ news, totalResults, pageNumber, onPagination }) {
  return (
    <div>
      <p>
        Está viendo 10 noticias de {totalResults} resultados
      </p>
      {news.map((item) => (
        <NewsItem
          source={item.source}
          title={item.title}
          image={item.urlToImage}
          publishedAt={item.publishedAt}
          url={item.url}
          key={item.id}
        />
      ))}
      <Pagination
        totalResults={totalResults}
        pageNumber={pageNumber}
        onChange={onPagination}
      />
    </div>
  );
}

export default NewsList;
