import React from "react";

const Blog = () => {
  return (
    <div className="blog">
      <div className="main-posts">
        <div className="post" id="post-1">
          <a href="">
            <h2 className="post-header">New Products</h2>
          </a>
          <p className="post-date"> August 27, 2022</p>
          <p className="post-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            delectus consequatur nostrum quod molestiae! Quasi quibusdam
            assumenda adipisci quisquam quia nihil nesciunt ipsam consequuntur m
            laudantium ratione quo!
          </p>
        </div>
        <div className="post">
          <a href="">
            <h2 className="post-header">New Products</h2>
          </a>
          <p className="post-date"> August 27, 2022</p>
          <p className="post-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            delectus consequatur nostrum quod molestiae! Quasi quibusdam
            assumenda adipisci quisquam quia nihil nesciunt ipsam consequuntur m
            laudantium ratione quo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
