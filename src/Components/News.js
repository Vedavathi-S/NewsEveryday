import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


export class News extends Component{
static defaultProps = {
   pageSize: 5,
   category:"science",
  }
  static propTypes = {
  pageSize: PropTypes.number,
  category:PropTypes.string,
}
 capitalizeFirstLetter=(val)=> {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  constructor(props)
  {
    super(props);
    console.log("This is a news constructor");
    this.state={
      articles: [],
      loading:false,
      page:1,
      totalResults:0,
      hasMore:true,
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -NewsApp`;
  }
  update=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      loading:false,
      hasMore: parseddata.articles.length < parseddata.totalResults
    })
  }
  async componentDidMount()
  {
    this.update();
  }

   fetchMoreData=async()=>{
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    this.setState({articles:this.state.articles.concat(parseddata.articles),
      totalResults:parseddata.totalResults,
      loading:false,
      hasMore:this.state.articles.concat(parseddata.articles).length<parseddata.totalResults,
    
    })
 
   }

  render() {
    
    return (
      <>
      
        <h1 className="text-center" style={{margin:'40px 0px'}}>Top-{this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<Spinner />}
          >

        <div className="container">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,90):" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div> 
        </InfiniteScroll>
        
       
     </>
    )
  }
}

export default News
