import './Vote.css';
import axios from "axios";
import {useEffect, useState} from "react";
interface Props {
    voteId: string;
}

export const Vote = (props: Props) => {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
async function voteForPost(id: string){
    try{
        setLoading(true)
        await axios.patch(`/post/${id}`, {}, {withCredentials: true});
        setMessage('Your vote has been changed. This is now your favourite post!')
    } catch{
        setMessage('Something went wrong. Try again later.')
    }
    finally {
setLoading(false);
    }
}

useEffect(() => {
  setTimeout(() => {
      setMessage('');
  }, 3000)
}, [message])
    return <>{!loading && <button type="button" onClick={() => voteForPost(props.voteId)} className="btn btn-outline-success">Change
        your vote</button>}
        {message && <div className="vote-message">{message}</div>}</>
}