
import React, { Component } from "react";
import './home.css';
import Logo from '../images/hulugram blueish 2.png';

class Home extends Component {
  render() {
    return (
      <React.Fragment>

      <div id="fb-root"></div>
      <div class="tl_page_wrap">
        <div class="container clearfix tl_page_container tl_main_page_container">
          <div class="tl_page">
            <div class="tl_main_wrap">
    <div class="tl_main_head">
      <div class="tl_main_side_blog"><div class="side_blog_wrap">
    <a href="/blogs" class="side_blog_header">Recent News</a>
    <div class="side_blog_entries">
      <a href="/blogs/#q-what-is-telegram-what-do-i-do-here" class="side_blog_entry">
    <div class="side_blog_date">Nov 29</div>
    <div class="side_blog_title">What is Telegram?</div>
  </a><a href="/blogs/#q-how-is-telegram-different-from-whatsapp" class="side_blog_entry">
    <div class="side_blog_date">Dec 8</div>
    <div class="side_blog_title">How is Telegram different from WhatsApp?</div>
  </a><a href="/blogs/#q-can-i-delete-my-messages" class="side_blog_entry">
    <div class="side_blog_date">Dec 9</div>
    <div class="side_blog_title">Can I delete my messages?</div>
  </a>
    </div>
  </div></div>
      <div class="tl_main_logo_wrap">
        <a href="/" class="tl_main_logo">
          <img class="tl_main_logo" src={Logo} alt="Mobogram logo"/>
          <div class="tl_main_logo_title_image"></div>
        </a>
        <p class="tl_main_logo_lead">a new era of messaging</p>
      </div>
    </div>
  
    <div class="tl_main_download_mobile clearfix">
      <div class="tl_main_download_mobile clearfix">
    <a href="/dl/android" class="tl_main_download_link tl_main_download_link_android" target="_blank" data-track="AppDownload/Android" onclick="trackDlClick(this, event)">
      <i class="icon icon-android"></i>Telegram for <strong>Android</strong>
    </a><a href="/dl/ios" class="tl_main_download_link tl_main_download_link_ios" target="_blank" data-track="AppDownload/iOS" onclick="trackDlClick(this, event)">
      <i class="icon icon-ios"></i>Telegram for <strong>iPhone</strong> / <strong>iPad</strong>
    </a><a href="/dl/wp" class="tl_main_download_link tl_main_download_link_wp" target="_blank" data-track="AppDownload/WP" onclick="trackDlClick(this, event)">
      <i class="icon icon-wp"></i>Telegram for <strong>WP</strong>
    </a>
    <a href="//desktop.telegram.org/" class="tl_main_download_link tl_main_download_link_tdesktop" data-track="AppDownload/TDesktop" onclick="trackDlClick(this, event)">
    Telegram for <strong>Windows / Mac / Linux</strong>
  </a>
  
  <a class="tl_main_download_more_btn" href="/apps">Browse more Telegram apps<i class="icon icon-arrow-more"></i></a>
  </div>
    </div>
  
    <div class="tl_main_download_desktop_section">
      <h3 class="tl_main_download_desktop_header">A native app for every platform</h3>
  
      <div class="tl_main_download_desktop_wrap1">
        <div class="tl_main_download_desktop_wrap">
          <div class="tl_main_download_desktop clearfix">
            <div class="tl_main_download_desktop_links clearfix">
              <a href="//desktop.telegram.org/" class="tl_main_download_desktop_link tl_main_download_link_td" data-track="DesktopDownload/TDesktop" onclick="trackDlClick(this, event)">
                Telegram&nbsp;for <strong>PC/Mac/Linux</strong>
              </a><a href="//macos.telegram.org/" class="tl_main_download_desktop_link tl_main_download_link_osx" data-track="DesktopDownload/OSX" onclick="trackDlClick(this, event)">
                Telegram&nbsp;for <strong>macOS</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="tl_main_body">
    <a name="why-switch-to-Telegram"></a>
    <h3 class="tl_main_body_header">Why switch to Telegram?</h3>
  
    <div class="tl_main_cards clearfix">
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_private"></div>
          <h3 class="tl_main_card_header">Private</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> messages are heavily
            encrypted and can self-destruct.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_cloud"></div>
          <h3 class="tl_main_card_header">Cloud-Based</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> lets you access your messages from multiple devices.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_fast"></div>
          <h3 class="tl_main_card_header">Fast</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> delivers messages faster than any other application.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_decentralized"></div>
          <h3 class="tl_main_card_header">Distributed</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> servers are spread worldwide for security and speed.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_open"></div>
          <h3 class="tl_main_card_header">Open</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> has an open <a href="//core.telegram.org/api">API</a> and <a href="//core.telegram.org/mtproto">protocol</a> free for everyone.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_free"></div>
          <h3 class="tl_main_card_header">Free</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> is free forever. No ads. No subscription fees.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_secure"></div>
          <h3 class="tl_main_card_header">Secure</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> keeps your messages safe from hacker attacks.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_powerful"></div>
          <h3 class="tl_main_card_header">Powerful</h3>
          <div class="tl_main_card_lead"><strong>Telegram</strong> has no limits on the size of your media and c<s>h</s>ats.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell_last">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_wecandoit"></div>
          <h3 class="tl_main_card_header">We Can do It!</h3>
          <div class="tl_main_card_lead">Help make messaging safe again &ndash; spread the word about <strong>Telegram</strong>.</div>
        </div>
      </div>
    </div>
  </div>
    <div class="tl_main_body">
    <a name="what-can-you-do-with-Telegram"></a>
    <h3 class="tl_main_body_header">What can you do with Telegram?</h3>
  
    <div class="tl_main_cards clearfix">
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_connect" title="Tour the Moon with robots"></div>
          <h3 class="tl_main_card_header">Connect</h3>
          <div class="tl_main_card_lead">from most remote locations.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_coordinate" title="Take a hot bath in your suit"></div>
          <h3 class="tl_main_card_header">Coordinate</h3>
          <div class="tl_main_card_lead">groups of up to 200,000 members.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_synchronize" title="Discover a twin brother in your toilet"></div>
          <h3 class="tl_main_card_header">Synchronize</h3>
          <div class="tl_main_card_lead">your chats across all your devices.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_send" title="Say no to a parrot"></div>
          <h3 class="tl_main_card_header">Send</h3>
          <div class="tl_main_card_lead">documents of any type.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_encrypt" title="Walk around wearing a horse head"></div>
          <h3 class="tl_main_card_header">Encrypt</h3>
          <div class="tl_main_card_lead">personal and business secrets.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_destruct" title="Help a cat blow up the parliament"></div>
          <h3 class="tl_main_card_header">Destruct</h3>
          <div class="tl_main_card_lead">your messages with a timer.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell_last">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_store" title="Grow 4 extra arms"></div>
          <h3 class="tl_main_card_header">Store</h3>
          <div class="tl_main_card_lead">your media in the cloud.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_build" title="Extract phones from a hippo"></div>
          <h3 class="tl_main_card_header">Build</h3>
          <div class="tl_main_card_lead">your own tools on our API.</div>
        </div>
      </div>
  
      <div class="tl_main_card_cell">
        <div class="tl_main_card_wrap">
          <div class="tl_main_card tl_main_card_process" title="Get famous and busy"></div>
          <h3 class="tl_main_card_header">Enjoy</h3>
          <div class="tl_main_card_lead">feedback from your customers.</div>
        </div>
      </div>
    </div>
  </div>
    <div class="tl_main_noshare clearfix"></div>
  
  </div>
            
          </div>
        </div>
      </div>
  
    </React.Fragment>
    );
  }
}

export default Home;