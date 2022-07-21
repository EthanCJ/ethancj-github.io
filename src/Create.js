import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Create = () => {
    const { t, i18n } = useTranslation();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [user,setUser]=useState('');
    const [topic,setTopic]=useState('sci');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const post={title,body,user,topic};

        fetch('http://localhost:8000/posts',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(post)
        })

        navigate('/')
    }

    return ( 
        <div className="create">
            <h2>{t("createPost")}</h2>
            <form onSubmit={handleSubmit}>
                <label>{t("postTitle")}</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            <label>{t("postBody")}</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>

            <label>{t("postName")}</label>
            <textarea
                required
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            ></textarea>

            <label>{t("catagory")}</label>
            <select
                value={topic}
                onChange={(e)=>setTopic(e.target.value)}
            >
                <option value="sci">Science</option>
                <option value="tech">Technology</option>
                <option value="eng">Engineering</option>
                <option value="math">Mathematics</option>
            </select>
            

            <button>{t("postButton")}</button>


            </form>
        </div>
     );
}
 
export default Create;
