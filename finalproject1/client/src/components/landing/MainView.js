import React from 'react';
import SearchBar from './SearchBar';
import GroupList from '../groups/GroupList';
import PostsList from '../Posts/PostsList';
import axios from 'axios';
import {url, getPosts} from "../utils/RestUtils";
import Header from '../Header';

class MainView extends React.Component {
  state = {grpSearchTerm:'',
            groups: [],
            posts: [],
            };


            componentDidMount() {
              console.log(this.state);
              if(this.state.posts.length === 0) {
                axios.get(url + "groups").then(
                    function(response) {
                        this.setState({ groups: response.data });
                    }.bind(this),
                    function(error) {
                        console.log(error)
                    }
                );
              }

            }

  onTermSubmit = (term) => {

  }

  onGetPosts = (response) => {
    this.setState({posts: response.data});
  }

  onGroupSelect(id, onGetPosts) {
    console.log("in click handler - "+id);
    var resp;
    axios.get(url + "posts", {params: {
        groupId: id  }}).then(
      function(response) {
        onGetPosts(response);
      },
      function(error) {
        console.log(error);
      }
    );
  }



  render() {
    return (
      <div>
        <Header/>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          {this.state.posts.length === 0 ?
            <GroupList groups={this.state.groups} onGroupSelect={this.onGroupSelect} onGetPosts={this.onGetPosts}/> :
            <PostsList posts={this.state.posts}/>
          }


        </div>
      </div>
          );
  }
}

export default MainView;
