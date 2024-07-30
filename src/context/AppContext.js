import React, { useState, createContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../BaseUrl';
import { useNavigate } from 'react-router-dom';

// Creating context
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // Data filling 
    async function fetchBlogPosts(page = 1, tag = null, category = null) {
        try {
            setLoading(true);
            let url = `${baseUrl}?page=${page}`;
            if (tag) {
                url += `&tag=${tag}`;
            }
            else if (category) {
                url += `&category=${category}`;
            }
            const response = await axios.get(url);
            const { data } = response;  // Correctly access response data
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        } finally {
            setLoading(false);
        }
    }

    function pageHandler(page) {
        navigate( { search: `?page=${page}`});
        setPage(page);
    }

    // Providing context to children
    const exportedData = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts, // Ensure this is included in the context value
        pageHandler
    };

    return (
        <AppContext.Provider value={exportedData}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
