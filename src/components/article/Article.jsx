import React from 'react';
import './article.css';
const Article = (props) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img alt="article_img" src={props.img} />
      </div>
      <div className='gpt3__article-text'>
        <div>
          <p>{props.date}</p>
          <h2>{props.heading}</h2>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article
