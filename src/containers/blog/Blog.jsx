import React from 'react'
import './blog.css'
import {Article} from '../../components/index.js';
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-big-article'>
          <Article img={blog1} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-small-articles'>
          <Article img={blog2} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img={blog3} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img={blog4} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article img={blog5} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
