import React, { Component } from 'react';
export default class Footer extends Component {
  render(){
    return(
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col s6">
                © Kenzo Mendoza 2016
              </div>
              <div className="col s6 right-align font-awesome">
                <a href="http://kenzomendoza.com/"><i className="fa fa-address-card-o fa-2x"></i></a>
                <a href="https://github.com/Neotriz/fcc-voter"><i className="fa fa-github fa-2x"></i></a>
                <a href="https://www.freecodecamp.com/challenges/build-a-voting-app"><i className="fa fa-free-code-camp fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
