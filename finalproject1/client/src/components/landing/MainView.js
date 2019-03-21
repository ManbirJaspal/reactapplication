import React from 'react';
import SearchBar from './SearchBar';
import GroupList from '../groups/GroupList';


class MainView extends React.Component {
  state = {grpSearchTerm: "",
            groups: [
                      {id: "test1", name: "Cats", description: "All about Cats"},
                      {id: "test2", name: "Dogs", description: "Its Dogs"},
                      {id: "test3", name: "Women", description: "Its blah blah"},
                      {id: "test4", name: "Men", description: "All Men must die"}
                    ]
            };


  onTermSubmit = (term) => {

  }

  render() {
    return (
      <div className="ui container">
      // <SearchBar onFormSubmit={this.onTermSubmit} />
      <GroupList groups={this.state.groups} />
      </div>
    );
  }
}

export default MainView;
