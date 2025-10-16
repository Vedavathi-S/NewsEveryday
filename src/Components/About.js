import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center' style={{margin:"50px"}}>Explore key features of our app below</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is this News App?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This News App brings you the latest updates from multiple categories like sports, business, technology, and more — all fetched from trusted APIs.</strong>  
               It’s designed for quick, smooth browsing and a clean reading experience.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How does it work?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                The app uses React components and the NewsAPI service to fetch real-time articles.  
              <strong>React Router is used for navigation between pages such as Home and About.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Developer Info
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This project was built by Vedha as part of learning React and building full-stack applications.
              Future updates will include search filters and dark mode!
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default About
