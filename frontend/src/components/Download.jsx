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
	downloadHulugramApp() {
		axios({
			url: 'http://localhost:5000/static/example.pdf',
			method: 'GET',
			responseType: 'blob', // important
		  }).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'file.pdf');
			document.body.appendChild(link);
			link.click();
		  });
	 }

	componentDidMount() { 
		this.fetchStatisticsData();
		console.log(this);
	   }
	render() {
		return (
			<div id="downloadContainer">
				<h1>Downloads</h1>
                <p>Latest ሁሉግራም Version: <b>{this.state.appVersoin}</b> </p>
				<h3>Download <strong>ሁሉግራም</strong> android applicaiton and start enjoying your life</h3>
				<div>
				<button className="stable" onClick={()=>this.downloadHulugramApp()}>
				<h2> Stable Version</h2>
				<p>Recommended For Most Users</p>
				</button>
				</div>
				<div>
				<button className="current" onClick={()=>this.downloadHulugramApp()}>
				<h2> Current Version</h2>
				<p>Latest Features</p>
				</button>
				</div>
			</div>
		)
	}

}
export default DownloadHulugram;