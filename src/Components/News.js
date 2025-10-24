import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


const News=(props)=>{
  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(true);
  const [page, setPage]=useState(1);
  const [totalresults, setToatalresults]=useState(0);
  const [hasMore, setHasMore]=useState(true);
  // document.title=`${capitalizeFirstLetter(props.category)} -NewsApp`;

  const capitalizeFirstLetter=(val)=> {
      return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const update=async ()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data =await fetch(url);
    props.setProgress(30);
    let parseddata=await data.json();
    props.setProgress(50);
    console.log(parseddata);
    setArticles(parseddata.articles);
    setToatalresults(parseddata.totalResults);
    setHasMore(parseddata.articles.length<parseddata.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(()=>{
    update();
  },[])

   const fetchMoreData=async()=>{
    const nextPage=page+1;
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=20d0284e6b1244a1a88b772b5c1741f0&page=${nextPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data =await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
      // If no new articles are returned → stop fetching
    if (!parseddata.articles || parseddata.articles.length === 0) {
     setHasMore(false);
      return;
    }
    const newArticles=articles.concat(parseddata.articles);
    const hasMore=articles.concat(parseddata.articles).length<parseddata.totalResults;
    setArticles(newArticles);
    setToatalresults(parseddata.totalResults);
    setPage(nextPage);
    setHasMore(hasMore);
    setLoading(false);
   
   }
    
    return (
      <>
        <h1 className="text-center" style={{margin:'40px 0px'}}>Top-{capitalizeFirstLetter(props.category)} Headlines</h1>
      
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Spinner />}
          >

        <div className="container">
        <div className="row">
          {articles.map((element, index)=>{
            return <div className="col-md-4" key={element.url?element.url+index:index}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,90):" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        </div> 
        </InfiniteScroll>
        
       
     </>
    )
}

News.defaultProps = {
   pageSize: 5,
   category:"science",
  }
News.propTypes = {
  pageSize: PropTypes.number,
  category:PropTypes.string,
}

export default News
