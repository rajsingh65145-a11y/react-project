// useFetch.js
import { useState, useEffect } from 'react'

function useFetch(url) {          // "url" yaha PARAMETER hai, component nahi
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    
    useEffect(() => {
        async function fetchdata() {
            try {
                let responce = await fetch(url);
                let result = await responce.json();
                setdata(result);
            } catch (err) {
                seterror("something went wrong");
            } finally {
                setloading(false);
            }
        }
        fetchdata();
    }, [url]);
    
    return { data, loading, error };   // JSX NAHI, sirf values return ki
}

export default useFetch