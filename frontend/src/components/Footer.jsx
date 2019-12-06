import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {


    render() {
        return (
            <div className="footer_wrap"> 
            <div className="footer_columns_wrap clearfix footer_desktop">
            <div className="footer_column footer_column_telegram">
            <h1>Hulugram</h1>
            <div className="footer_telegram_description"></div>
            Hulugram is a cloud-based mobile and desktop messaging app with a focus on security and speed.
          </div>
        
          <div className="footer_column">
          <h5><a href="/faq">About</a></h5>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/jobs">Jobs</a></li>
          </ul>
        </div>
        
        <div className="footer_column">
        <h5><a href="/apps#mobile-apps">Mobile Apps</a></h5>
        <ul>
          <li><a href="/dl/ios">iPhone/iPad</a></li>
          <li><a href="/dl/android">Android</a></li>
          <li><a href="/dl/wp">Windows Phone</a></li>
        </ul>
        </div>
        
        <div className="footer_column">
        <h5><a href="/apps#desktop-apps">Desktop Apps</a></h5>
        <ul>
          <li><a href="//desktop.telegram.org/">PC/Mac/Linux</a></li>
          <li><a href="//macos.telegram.org/">macOS</a></li>
          <li><a href="/dl/web">Web-browser</a></li>
        </ul>
        </div>
        </div>
        <div className="footer_columns_wrap clearfix footer_mobile">
        <div className="footer_column">
          <h5><a href="/faq">About</a></h5>
        </div>
        <div className="footer_column">
          <h5><a href="/blog">Blog</a></h5>
        </div>
        <div className="footer_column">
          <h5><a href="/apps">Apps</a></h5>
        </div>
        <div className="footer_column">
          <h5><a href="//core.telegram.org/">Platform</a></h5>
        </div>
        <div className="footer_column">
          <h5><a href="https://twitter.com/telegram" target="_blank" rel="noopener noreferrer" data-track="Follow/Twitter" onClick="trackDlClick(this, event)">Twitter</a></h5>
        </div>
        </div>
            </div>
        );
    }
}


export default Footer;