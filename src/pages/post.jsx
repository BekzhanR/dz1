import React, {useState} from 'react';
import axios from "axios";
import classes from "./app.module.sass"

const url = "https://dummyjson.com/posts/add"

const Post = () => {
    const [post,setPost]=useState({title:"",body:"",userId:1})
    const handleInput=(i)=>{
        setPost({
            ...post,
        [i.target.name]:i.target.value,
        })
    }
    const handleForm=async (i)=>{
        i.preventDefault()
        try{
            const response=await axios.patch(url,post)
            console.log("post request",post)
            setPost(response.data.posts.add)
            console.log("post finished",response.data)
        }catch (error){
            console.warn("error",error)
        }
    }
    return (
        <div className={classes.posted}>
            <h3>Create post</h3>
            <form onSubmit={handleForm}>
                <label><input onChange={handleInput} value={post.title} name="title" type="text"/></label>
                <label><textarea onChange={handleInput} value={post.body} name="body"/></label>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default Post;