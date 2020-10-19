import React, { Component } from 'react'
import Loader from './components/Loader';
import "./App.css"
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import EditPost from './components/EditPost' 

 class App extends Component {
  constructor(props){
    super();
    this.state={
      posts:[],
      loading:false,
      
    }
  }

  componentDidMount() {
    fetch("http://localhost:7000/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          posts: response,
          loading: true
        });
      });
  }


  render() {
    const {loading,posts}=this.state;
   
    if(!loading){
      return <Loader></Loader>
    }
    return (
      <Router>
      <div className="App">
      <Link to="/createpost"> <button type="button" className="LoadMore" >
            Create New Blog
          </button> </Link>
          <Link to="/"> <button type="button" className="LoadMore" >
            Your Blogs
          </button> </Link>
      {posts.map((post)=>{

      
      return <Route exact path="/" component={()=><Posts post={post}  />}></Route>
      })}
       <Route exact path="/createpost" component={CreatePost}></Route>
       <Route exact path="/edit/:id" component={EditPost}></Route>
        
      </div>
      </Router>
    );
  }
}



export default App;