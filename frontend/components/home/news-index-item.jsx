import React from 'react';

const NewsIndexItem = ({ url, title, description, image  }) => {
  return (
      <a href={url} className="news-item-link">
        <div className="article-info">
          <h5>{title}</h5>
          <h6>{description}</h6>
        </div>
        <img className="article-img"src={image} alt={title}/>
      </a>
  )
}

export default NewsIndexItem;