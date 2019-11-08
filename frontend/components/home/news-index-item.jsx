import React from 'react';

const NewsIndexItem = ({ url, source, title, description, image  }) => {
  return (
      <a target="_blank" href={url} className="news-item-link">
        <div className="article-info">
          <h2>{source}</h2>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <img className="article-img"src={image} alt={title}/>
      </a>
  )
}

export default NewsIndexItem;