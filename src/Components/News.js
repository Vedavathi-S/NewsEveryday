import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component{
  constructor()
  {
    super();
    console.log("This is a news constructor");
    this.state={
      articles: [],
      loading:true,
      page:1
      
    }
  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      loading:false})

  }

   handleNext=async ()=>{
   console.log("Next is pressed");
   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
   {
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data =await fetch(url);
      let parseddata=await data.json();
      console.log(parseddata);
      this.setState({
      page:this.state.page + 1,
      articles:parseddata.articles,
      loading:false
      })
    }
   }

   handlePrevious=async ()=>{
    console.log("Previous is pressed");
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({
    page:this.state.page - 1,
    articles:parseddata.articles,
    loading:false
    })

   }

  render() {
    
    return (

      <div className='container my-3'>
        <h1 className="text-center">Top- Headlines</h1>
        
        {this.state.loading && <Spinner/>}
          
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,90):" "} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
           
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button type="button" disabled={this.state.page<=1} className="btn btn-primary mx-3" onClick={this.handlePrevious}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}

export default News
