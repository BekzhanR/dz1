import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./app.module.sass"
const Look = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const api=async ()=>{
            const response=await axios.get("https://dummyjson.com/posts")
            setPosts(response.data.posts)
        }
        api()

    },[])
    return (
        <div className={classes.posts}>
            <h3>Look post</h3>
            {posts.map((index)=>(
                <div key={index.id}>
                    <h4>{index.title}</h4>
                    <span>{index.body}</span>
                </div>
            ))}
        </div>
    );
};

export default Look;