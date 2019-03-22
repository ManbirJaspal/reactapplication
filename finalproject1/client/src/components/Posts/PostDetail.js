import React from 'react';

const PostDetail => ({user, id, text}) = {

  return(
    <div className="ui item">
      <div className="item">
        <div className="content">
          <div className="header">
            <h1>{text}</h1>
          </div>
          <div className="description">
            <p>Posted By: {user}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
