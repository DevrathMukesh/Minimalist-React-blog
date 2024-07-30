import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function Home() {
    return (
        <div className='bg-[#F4F4F4] min-h-screen'>
            <Header />
            <div className=' mx-auto px-4 py-8'>
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
}

export default Home;
