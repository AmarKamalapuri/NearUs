import React from 'react';
import {Link} from 'react-router-dom';
import "./blog.css";
const Blog= () => {
    return(
<div>

    <div className="blog-word">

    <h1>Blog</h1>
    </div>
  
                  
<div class="blog">
  <div class="container">
    <div class="row">
       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                    <div class="news-box">
                        <figure><img src="img/slider-1.jpg" alt="img" /></figure>
                        <h3>Help Local Businesses</h3>
                        <span> January 21</span><span>Comment</span>
                        <p>If your money doesn't have a purpose towards humanity then it's just another piece of paper.
Make sure to be rich from heart before pocket.</p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                    <div class="news-box">
                        <figure><img src="img/slider-3.jpg" alt="img" /></figure>
                        <h3>A big business starts from small</h3>
                        <span> December 20</span><span>Comment</span>
                        <p>You can't buy happiness, but you can buy local,and that's kind of the same.</p>
                    </div>
                </div>
                
               
    </div>
  </div>
</div>




</div>
    )
}

export default Blog;