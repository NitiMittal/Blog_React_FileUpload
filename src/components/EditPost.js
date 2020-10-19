import Axios from 'axios';
import React, { Component } from 'react'
import axios from "axios"

export default class EditPost extends Component {
    constructor(props){
        super();
        this.state={
            title:"",
            desc:"",
            image:""
        }
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
      
       axios.get("http://localhost:7000/"+this.props.match.params.id)
        .then((res)=>{
            console.log(res.data);
            this.setState({title:res.data.title,desc:res.data.desc})
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const obj={
            title:this.state.title,
            desc:this.state.desc
        }
        axios.put("http://localhost:7000/blog/"+this.props.match.params.id,obj)
        
        .then((res)=>{
            this.props.history.push("/");
            window.location.reload(true)
        })
    }
    render() {
        const{title,desc,image}=this.state
        return (
            <div>
            <h1>Edit your Blog here</h1>
            <form onSubmit={this.onSubmit} >
                <label>Title:</label><br/>
                <input type="text" name="title" onChange={this.onChange} value={title} required></input><br/>
                <label >Description:</label><br/>
                <textarea name="desc" onChange={this.onChange} required value={desc}></textarea><br/>
               
               <label>Upload Image if any:</label> <br/> <input type="file" name="blog_image" onChange={this.onFileChange}  accept=".jpeg, .png, .jpg"></input><br/>
               <input type="submit" value="Update Blog" ></input>
               
            </form>
        </div>
        )
    }
}
