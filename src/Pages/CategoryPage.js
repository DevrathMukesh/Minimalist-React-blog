import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className='bg-[#F4F4F4] min-h-screen'>
            <Header />
            <div className='mx-auto px-4 py-8'>
                <div className='flex justify-evenly mt-4'>

                    <h2 className='text-3xl font-bold text-[#2C3E50]'>
                        Blogs Categories <span className='text-[#1ABC9C]'>#{category}</span>
                    </h2>
                    <button
                        className='mb-6 border-2 border-[#BDC3C7] rounded-md py-2 px-4 text-[#2C3E50] hover:bg-[#D0F2F1] transition-colors duration-300'
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                </div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
}

export default CategoryPage;
