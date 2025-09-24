import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imgUrl,newsUrl}=this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl} alt='some error occured'/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read</a>
         </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
