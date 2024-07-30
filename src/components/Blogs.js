import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


function Blogs() {
    const { posts, loading } = useContext(AppContext);

    return (
        <div className="container mx-auto px-4 py-8 bg-[#F4F4F4]"> {/* Light Gray background */}
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="text-center text-lg text-[#19647E]">No Posts Found</div>
            ) : (
                posts.map((post) => (<BlogDetails key={post.id} post={post} />))
            )}
        </div>
    );
}

export default Blogs;
