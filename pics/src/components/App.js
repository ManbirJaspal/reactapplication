import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    //adding async keyword before onSearchsubmit lets us use the async await syntax inside the function.
   async onSearchSubmit(term) { 
        /*executing a get request with axios to get data from the api. First argument is the Url we are making a request to. The second argument allows us to configure the request  */
       const response = await axios.get('https://api.unsplash.com/search/photos', { 
            
            params: {query: term},   //query is going to take in our search term and and it to the api. 
            headers: {
                  Authorization: 'Client-ID a74e1aba63038334c1c9cd5a8935331834acd030f3fb84dc88f7f45f5a9dc94b'   //providing Authorization int he way requested on the documentation of Unsplash API. We create a headers object. This is going to  add headers to the unsplash API */
                  }
            
        }).then((response) => {  //is a callback function that would be invoked with whatever data we got back from the api. Its usually an arrow function.
            console.log(response.data.results);
            
        });
    }
    
   render() {
       return ( <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
              );
    }


};

export default App;