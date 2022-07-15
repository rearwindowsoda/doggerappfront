import './AddPost.css'
import {SyntheticEvent, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {AxiosLoginDataError} from "../../types/login";



export const AddPost = () => {
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', (file as any))
            formData.append('description', description)
            const data: AxiosResponse = await axios.post('/upload/post', formData, {
                withCredentials: true,
            });
            setMessage((data as any).data.message + '. Post successfully added. You will find it on the home page 🐩');

        } catch (e: any) {
            if (e.response) {
                setMessage((e as AxiosLoginDataError).response.data.message);
            }

        } finally {
            setLoading(false);

        }
    }


    return (
        <div className={"form-container"}>


            <form className={"col-4 form"} onSubmit={submit}>
                <div className="form-group">
                    <label className="form-control">Description:
                        <textarea className="form-control"
                                  placeholder={"Provide us with a short description of this post 🦮 :)"}
                                  name={"description"}
                                  onChange={e => setDescription(e.target.value)}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <label className={"form-control"}>
                        Image:

                        <input type="file" name={"file"} onChange={e => setFile((e as any).target.files[0])}
                               className={"file-input"}/>


                    </label>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Add post 🐕‍!</button>
                </div>
            </form>

            {message && <div className={"message-window"}>{message}</div>}
        </div>
    )
}