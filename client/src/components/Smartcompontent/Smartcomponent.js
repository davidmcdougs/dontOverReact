// this template will be useful for making a stateful component that initilzed our statelss ones.

class SearchResultsPage extends Component {
    this.state = {
        searchResults: null
    };
  
    getNYTData() {
        request("newYorkTimes.url").then( response => {
            //update modal
            this.setState({
                searchResults: response
            });
        }).catch( err => {
            console.error(err);
        });
    }
  
    render() {
        <div>
            <button onClick={this.getNYTData}></button>
            <MyDataComponent results={this.state.searchResults} />
        </div>   
    }
  };