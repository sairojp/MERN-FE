const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/#" title="">
            <span>
              <img src="./images/icon1.png" alt="" />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="/#" title="" className="not-box-openm">
            <span>
              <img src="./images/icon6.png" alt="" />
            </span>
            Messages
          </a>
          <div className="notification-box msg" id="message">
            <div className="nt-title">
              <h4>Setting</h4>
              <a href="/#" title="">
                Clear all
              </a>
            </div>
            <div className="nott-list">
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img1.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img2.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img3.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="view-all-nots">
                <a href="/#" title="">
                  View All Messsages
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="/#" title="" className="not-box-open">
            <span>
              <img src="./images/icon7.png" alt="" />
            </span>
            Notification
          </a>
          <div className="notification-box noti" id="notification">
            <div className="nt-title">
              <h4>Setting</h4>
              <a href="/#" title="">
                Clear all
              </a>
            </div>
            <div className="nott-list">
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img1.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                    Comment on your post.
                  </h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img2.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                    Comment on your post.
                  </h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img3.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                    Comment on your post.
                  </h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src="./images/ny-img2.png" alt="" />
                </div>
                <div className="notification-info">
                  <h3>
                    <a href="/#" title="">
                      Jassica William
                    </a>
                    Comment on your post.
                  </h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="view-all-nots">
                <a href="/#" title="">
                  View All Notification
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;