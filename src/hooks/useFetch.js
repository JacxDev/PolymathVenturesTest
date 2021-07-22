import { useState, useEffect } from 'react';

const useFetch = ( url, items ) => {
    // const [ state, setState ] = useState({data: null, loading: true, error: null});

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)
 
    useEffect(() => {
        const fetchData = async () => {
            const arr = []

            try {
                for(let i = 1; i <= items; i++){
                    const response = await fetch( `${url}/${i}`)
                    const data = await response.json();
                    arr.push(data)
                }
                setData(arr)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        

        fetchData();
    }, [url])


    return {
        data, 
        loading, 
        error
    };

}

export default useFetch