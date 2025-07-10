import { useEffect, useState } from 'react';
import edamam from '../api/edamam';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await edamam.get("/search", {
                params: {
                    q: searchTerm,
                    app_id: 'MY APP ID',
                    app_key: 'MY APP KEY',
                    to: 20,
                }
            });
            setResults(response.data.hits);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        searchApi("chicken");
    }, [])

    return [searchApi, results, errorMessage]
};

