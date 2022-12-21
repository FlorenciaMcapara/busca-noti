import React from 'react';
import * as Luxon from 'luxon';

import '../styles/NewsItem.css';

function NewsItem({ source, title, image, publishedAt, url }) {
  // Formatea la fecha de publicación de la noticia
  const date = Luxon.DateTime.fromISO(publishedAt);
  const formattedDate = date.toFormat('dd-LL-yyyy - hh:mm a');

  return (
    <div className="card">
      <div className="card-content d-flex">
        <div className="content-left d-flex flex-column align-items-start">
          <h3 className='origen-noticia'>{source.name}</h3>
          <h2 className='new-title'>{title}</h2>
          <p className="published-date">Publicado el: {formattedDate}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">Ver noticia completa</a>
        </div>
        <div className="content-right d-flex flex-column align-items-end">
          <img src={image} alt={title} className="image" />
        </div>
      </div>
    </div>
  );
}

export default NewsItem;




