import '../Posts/Posts.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Loader} from "../common/Loader/Loader";
import {TopTenPostsResponse} from 'types';


export const TopTenPosts = () => {
    const [posts, setPosts] = useState<TopTenPostsResponse | boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await axios.get(`show/posts/top`);
                const data = await res.data as TopTenPostsResponse;
                setPosts(data);
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
    if (posts) {
        return (
            <div className={"container"}>
                <div className="posts">
                    <ul>
                        {(posts as TopTenPostsResponse).map(post =>
                            <li key={post.id}>
                                <img src={post.link} alt="Great looking dog"/>
                                <p>{post.description}</p>
                                <hr/>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        )
    } else {
        return <></>
    }
}