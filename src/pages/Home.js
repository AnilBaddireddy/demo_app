import React, { Component } from 'react'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="row">

            <div className="col-md-4">
                <div className="card-box">
                    <div className="card-title">
                        <h2>Lorem ipsum dolor si.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
                    </div>
                    <div className="card-link">
                        <a href="/Home" className="c-link">Learn More
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-box">
                    <div className="card-title">
                        <h2>Lorem ipsum dolor si.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
                    </div>
                    <div className="card-link">
                        <a href="/Home" className="c-link">Learn More
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-box">
                    <div className="card-title">
                        <h2>Lorem ipsum dolor si.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, </p>
                    </div>
                    <div className="card-link">
                        <a href="/Home" className="c-link">Learn More
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
      </>
    )
  }
}
