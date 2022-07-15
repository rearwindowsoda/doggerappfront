import {useEffect, useState} from "react";
import {GetListOfPostsResponse} from 'types';
import axios from "axios";
import {Loader} from "../common/Loader/Loader";
import "./Posts.css"

export const Posts = () => {
    const [posts, setPosts] = useState<GetListOfPostsResponse | boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await axios.get('show/posts/1');
                const data = await res.data as GetListOfPostsResponse;
                setPosts(data)
            } catch (e) {
                return <div className="error">Could not get posts. Try again later</div>
            } finally {
                setLoading(false);
            }


        })()
    }, [])
    if (loading) {
        return (
            <div className="posts"><Loader/></div>
            )
    }

    if(posts){
        return (
            <div className="posts">
                <ul>
                    {(posts as GetListOfPostsResponse).posts.map(post =>
                        <li key={post.id}>
                            <img src={post.link} alt="Great looking dog"/>
                            <p>{post.description}</p>
                            <hr/>
                        </li>
                    )}
                </ul>

            </div>
        )
    }else{
        return <></>
    }

}