import React from "react";
import {Students} from '../landing/students';


const PostItem = ({id, text, user}) => {
  const onPostSelect (id, text, user) = {
    return <PostDetail
      id={id}
      text={text}
      user={user}
      }

      return (
      <div className="ui item" onClick={() => onPostSelect(id, text, user)}>
        <div className="item">
          <div className="content">
            <div className="header">
          <h1>{text}</h1>
        </div>
        </div>
      </div>
    </div>
  );
};



export default PostItem;
