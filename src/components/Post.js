import React from 'react';

import Comment from './Comment';

import './Post.css'

function Post({ data }) {
  return (
    <div className="post">

      <div className="user">
        <img src={data.author.avatar}/>
        <div className="info-user">
          <strong>{data.author.name}</strong>
          <p>{data.date}</p>
        </div>
      </div>

      <div className="content">
        <p>{data.content}</p>
      </div>

      <div className="line"></div>
      
      {data.comments.map(comment => <Comment key={comment.id} data={comment} /> )}

    </div>
  );
}

export default Post;