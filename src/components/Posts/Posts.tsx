import {useContext, useEffect, useState} from "react";
import {GetListOfPostsResponse} from 'types';
import axios from "axios";
import {Loader} from "../common/Loader/Loader";
import "./Posts.css"
import {Pagination} from "../Pagination/Pagination";
import {UserContext} from "../../contexts/user.context";
import {Vote} from "../Vote/Vote";

export const Posts = () => {
    const [posts, setPosts] = useState<GetListOfPostsResponse | boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [numberOfPages, setNumberOfPages] = useState<number>(0);
    const {logged, setLogged} = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await axios.get(`show/posts/${currentPage}`);
                const data = await res.data as GetListOfPostsResponse;
                setPosts(data);
                setNumberOfPages(data.pagesCount);
            } catch (e) {
                return <div className="error">Could not get posts. Try again later</div>
            } finally {
                setLoading(false);
            }


        })()
    }, [currentPage])

    function paginate(pageNumber: number): void {
        setCurrentPage(pageNumber)
    }


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
                    {(posts as GetListOfPostsResponse).posts.map(post =>
                        <li key={post.id}>
                            <img src={post.link} alt="Great looking dog"/>
                            <p>{post.description}</p>
                            {logged && <Vote key={post.id} voteId={post.id} />}
                            <hr/>
                        </li>
                    )}
                </ul>

            </div>
                <Pagination currentPage={currentPage} numberOfPages={numberOfPages} paginate={paginate}></Pagination>
            </div>
        )
    } else {
        return <></>
    }

}