import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default class Posts extends Component {

onDelete=(id)=>{
  axios.delete(`http://localhost:7000/blog/${id}`)
  .then(res => {
    alert("Blog deleted successfully");
    window.location.reload(true);
  })

}
 
  render() {
    const { post } = this.props;
    console.log(post)
    let image_path = '';  
    try {  
        image_path = require(`./src/uploads/${post.image}`); 
    } catch(err){  
        image_path = require(`../images/defaultblog.jpg`);  //set default image path
    } 
    
    return (
      <div>
        <div className="posts">
          <li>
            <div className="post">
              <div className="title">{post.title} </div>

              {/* <img src={`/uploads/${post.image}`} alt="uploads"></img>  */}
              <img src={image_path} alt="uploads"/>
              <div className="desc">{post.desc}</div>
              <div><Link to={`edit/${post._id}`}><button className="buttons">EDIT</button></Link>
              <button className="buttons" onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.onDelete(post._id)};}}>DELETE</button></div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}
