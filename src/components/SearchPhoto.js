import React, {useState} from 'react';
import axios from 'axios';

const accessKey="0VWBNKopc10L0mCbs650Gq4gl0A1JhBe1sC_Yv5BPWw";
function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [result , setResult] = useState([]);
    const searchPhotos = (e) => {
        console.log(query);
        e.preventDefault();
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;
        axios.get(url).then((response) =>{
            console.log(response);
            setResult(response.data.results);
            console.log(result);
        })
        // unsplash.search.getPhotos(query, 1, 20).then((img) => {setPics(img.urls)});
        console.log("Submitting the form");
    };
    return(
        <>
        <div className="form">
            <label className='label' htmlFor='query'>
            {" "}
            📷
            </label>
            <input 
                type="text"
                name="query"
                className="input" 
                placeholder={`Try something`}
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" onClick={searchPhotos} className="button">Search</button>
        </div>
        <div className='card-list'>
            {result.map((pic) => 
                <a href={pic.urls.raw} target="_blank" className="card"><img className='card-image'
                alt={pic.alt_desciption}
                src={pic.urls.full}
                width="50%"></img></a>
            )}
        </div>
        </>
    )
}
export default SearchPhotos;