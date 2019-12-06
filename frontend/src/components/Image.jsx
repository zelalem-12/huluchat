
import React, { Component } from "react";

import screeshoots1 from '../images/device-2019-02-14-233821.png';
import screeshoots2 from '../images/device-2019-02-14-233844.png';
import screeshoots3 from '../images/device-2019-02-14-233852.png';
import screeshoots4 from '../images/device-2019-02-14-233916.png';
import screeshoots5 from '../images/device-2019-02-14-234002.png';
import screeshoots6 from '../images/device-2019-02-14-234110.png';

class Image extends Component {
  render() {
    return (
      <div id="stasticsContainer">
      <h1>Application usage screeshoots</h1>
      <img src={screeshoots1} alt='imag1' width ='300px'/>
      <img src={screeshoots2} alt='imag1' width ='300px'/>
      <img src={screeshoots3} alt='imag1' width ='300px'/>
      <img src={screeshoots4} alt='imag1' width ='300px'/>
      <img src={screeshoots5} alt='imag1' width ='300px'/>
      <img src={screeshoots6} alt='imag1' width ='300px'/>
      </div>
    );
  }
}

export default Image;
