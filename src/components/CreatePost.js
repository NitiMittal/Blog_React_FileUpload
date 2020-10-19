import React, { Component } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"

export default class CreatePost extends Component {
constructor(props){
    super();
    this.state={
        title:"",
       desc:"",
       selectedFile:null,
       multerImage:null
        

    }
}

onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

onFileChange=(e)=>{
 
  this.setState({selectedFile: e.target.files[0]})
 
  }



onSubmit=(e)=>{
 
    let imageFormObj=new FormData();
    imageFormObj.append("title",this.state.title);
   imageFormObj.append("desc",this.state.desc);
    imageFormObj.append("imageName","multer-image-"+Date.now());
    imageFormObj.append("imageData",this.state.selectedFile);
    this.setState({multerImage:URL.createObjectURL(this.state.selectedFile)});

    axios.post("http://localhost:7000/uploadmulter",imageFormObj)
    .then((data)=>{
      window.location.reload(true);
     this.props.history.push("/");
    })
    .catch((err)=>{
      alert("Error while creating blog");
    })

  
}

// onSubmit=(e)=>{
//   e.preventDefault();
//   const fd= new FormData();
//   fd.append("title",this.state.title);
//   fd.append("desc",this.state.desc);
//   if(this.state.selectedFile!==null){
//   fd.append("selectedFile",this.state.selectedFile,this.state.selectedFile.name)
//   }
//   fetch("http://localhost:7000/createblog",{
//     method:"POST",
//     body:fd
//   })
//   .then((res)=>res.json())
//   .then((res)=>{
//     this.setState({title:"",desc:"",selectedFile:null});
//     this.props.history.push("/");
//   }).catch(err=>{
//     console.log(err)
//   })
// }

    render() {
        return (
            <div>
                <h1>Create your post here</h1>
                <form onSubmit={this.onSubmit} >
                    <label>Title:</label><br/>
                    <input type="text" name="title" onChange={this.onChange} required></input><br/>
                    <label >Description:</label><br/>
                    <textarea name="desc" onChange={this.onChange} required></textarea><br/>
                   
                   <label>Upload Image:</label> <br/> <input type="file" name="blog_image" onChange={this.onFileChange} accept=".jpeg, .png, .jpg"></input><br/>
                   <input type="submit" value="Submit Post" ></input>
                   
                </form>
            </div>
        )
    }
}
