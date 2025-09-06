import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description}=this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
            <img src="https://th.bing.com/th/id/OIP.MGVWHTJ7IgtUuKwjDUuYqQAAAA?&w=160&h=240&c=7&pid=ImgDet&o=7&rm=3" className="card-img-top" alt="https://th.bing.com/th/id/OIP.MGVWHTJ7IgtUuKwjDUuYqQAAAA?&w=160&h=240&c=7&pid=ImgDet&o=7&rm=3"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
         </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
