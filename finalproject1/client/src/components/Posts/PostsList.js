import React from "react";
import PostItem from "./PostItem";
import CreatePostDialogue from './CreatePostDialogue';
import axios from 'axios';
import {url} from '../utils/RestUtils';

class PostsList extends React.Component {

  state = {showDialogueBox: false};

  renderedList = this.props.posts.map(post => {
    return (
    <PostItem
      id={post.post_id}
      text={post.post}
      user={post.user_id}
      onPostSelect={this.props.onPostSelect}
      onGetComments={this.props.onGetComments}
    />
);
  });

onPostSubmit = (text) => {

      console.log("inside OnPOstSubmit", text);
      console.log(this.props.posts[0].group_id);
         axios.post(url + "posts", {
                 group_id: this.props.posts.group_id,
                 post: text,
                 user_id: 23,
                 post_id: 50
             })
  .then(
         function(response) {
             console.log("Post created", response);
         },
         function(error) {
             console.log(error)
         }
     );
}

render() {
  return(
  <div>
    <div>
      <CreatePostDialogue onPostSubmit={this.onPostSubmit}/>
    </div>
    <div className="ui relaxed divided list">{this.renderedList}</div>
  </div>
);
}
}

export default PostsList;
