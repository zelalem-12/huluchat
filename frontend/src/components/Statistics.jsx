
import React, { Component } from "react";
import axios from 'axios';
import './statistics.css';

class Statistics extends Component {
    constructor(props){
        super(props)
        this.state  = {
          statisticsData : {"downloads":1000,"likes":200,"reviews":17,"verstion":6}
            
        };
    }

    fetchStatisticsData() {
        // Where we're fetching data from
        axios.get(`https://hulugram-beta.firebaseio.com/appstat.json`)
          // We get the API response and receive data in JSON format...
          .then(response => {
            console.log(response)
            this.setState({
              statisticsData: response.data,
            });
          })
          // Catch any errors we hit and update the app
          .catch(error => console.log(error)); 
        }


     componentDidMount() { 
       this.fetchStatisticsData();
     }

  render() {
    const {statisticsData } = this.state;
  
    return (
      <React.Fragment>

      <div id="stasticsContainer">
      <h1>Application Status</h1>
           
      <ul className="stat">
      <li>
      <h1>{statisticsData.downloads}</h1>
      <p>Downloads</p>
      </li>

      <li>
      <h1>{statisticsData.likes}</h1>
      <p>Likes</p>
      </li>

      <li>
      <h1>{statisticsData.reviews}</h1>
      <p>Reviews</p>
      </li>
      <li>
      <h1>{statisticsData.verstion}</h1>
      <p>Verstion</p>
      </li>
      </ul>
      </div>
            </React.Fragment>
    ); 
  }
}
// {"downloads":1000,"likes":200,"reviews":17,"verstion":6}

export default Statistics;
