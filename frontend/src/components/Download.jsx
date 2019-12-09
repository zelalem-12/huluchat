import React from 'react';
import axios from 'axios';
import './download.css';

class DownloadHulugram extends React.Component {
	
	constructor(props) {
		super(props);
		this.state  = {
		appVersoin: 6.0	  
 	    	  }
		  }
	fetchStatisticsData() {
		// Where we're fetching data from
		axios.get(`https://hulugram-beta.firebaseio.com/appstat.json`)
		// We get the API response and receive data in JSON format...
		.then(response => {
			this.setState({
				appVersoin: response.data.verstion
			});
		})
		// Catch any errors we hit and update the app
		.catch(error => console.log(error)); 
		}

	componentDidMount() { 
		this.fetchStatisticsData();
		console.log(this);
	   }
	render() {
		return (
			<React.Fragment>
			<div id="downloadContainer">
				<h1>Downloads</h1>
                <p>Latest Hulugram Version: <b>{this.state.appVersoin}</b> </p>
				<h3>Download <b><strong>Hulugram</strong></b> android applicaiton and start enjoying your life</h3>
			<ul className="stat">
			<li>
			<h3>Stable Verstion</h3>
			<p>Recommondded for most users</p>
			<a href='/faq'>
			<h2><i class="fa fa-cloud-download"></i></h2>
			</a>
			</li>
			<li>
			<h3>Current Verstion</h3>
			<p>Recommondded for advanced users</p>
			<a href='/statistics'>
			<h2><i class="fa fa-cloud-download"></i></h2>
			</a>
			</li>
	  
		
			</ul>
			</div>
			</React.Fragment>
		)
	}

}
export default DownloadHulugram;