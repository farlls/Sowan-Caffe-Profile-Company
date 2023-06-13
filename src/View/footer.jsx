import React from "react";
function Footer() {
  return (
    <footer>
      <div className="container-footer-background">
        <div className="column-footer">
          <section className="footer-menu">
            <div className="row-footer-menu">
              <div className="menu-one-footer">
                <div className="menu-one-column">
                  <img className="footer-logo"></img>
                  <p className="desc-menu-one"></p>
                  <div className="sosmed-icon">
                    <div className="row-sosmed-icon">
                      <i className="icon-facebook"></i>
                      <i className="icon-twiter"></i>
                      <i className="icon-instagram"></i>
                      <i className="icon-linkedln"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-two-footer">
                <div className="menu-two-column">
                  <h3 className="heading-menu"></h3>
                  <div className="content-menu-two">
                    <h4 className="heading-content"></h4>
                    <h6 className="subheading-content"></h6>
                  </div>
                  <div className="content-menu-two">
                    <h4 className="heading-content"></h4>
                    <h6 className="subheading-content"></h6>
                  </div>
                  <div className="content-menu-two">
                    <h4 className="heading-content"></h4>
                    <h6 className="subheading-content"></h6>
                  </div>
                </div>
              </div>
              <div className="menu-tree-footer">
                <div className="menu-tree-column">
                  <h3 className="heading-menu"></h3>
                  <div className="row-content">
                    <img className="img-row-content"></img>
                    <div className="column-content">
                      <h4 className="heading-content"></h4>
                      <div className="row-headingIcon">
                        <i className="icon-clock"></i>
                        <h6 className="subheading-content-tree"></h6>
                      </div>
                    </div>
                  </div>
                  <div className="row-content">
                    <img className="img-row-content"></img>
                    <div className="column-content">
                      <h4 className="heading-content"></h4>
                      <div className="row-headingIcon">
                        <i className="icon-clock"></i>
                        <h6 className="subheading-content-tree"></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-four-footer">
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
