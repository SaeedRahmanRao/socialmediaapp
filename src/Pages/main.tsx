import {getDocs,collection} from "firebase/firestore";
import {db} from "../Config/fireBase";
import { useState,useEffect} from "react";
import { Post } from "./Post";
import "./Post.css";

export interface Post{
    id: string;
    userId:string;
    title:string;
    username:string;
    description:string;
}


export const Main=()=>{
    const [postsList,setPostsList]=useState<Post[] | null >(null);
    const postsRef=collection(db,"posts");

    const getPosts=async ()=>{
        const data=await getDocs(postsRef)
        setPostsList(data.docs.map((doc)=>({...doc.data(),id :doc.id}))as Post[]);
    };
    useEffect(()=>{
        getPosts();
    },[]);
    
    return <div>
        <h1 className="feed-title">Feed</h1>
        {postsList?.map((post)=>(
    <Post post={post}/>
    ))}
    </div>
};