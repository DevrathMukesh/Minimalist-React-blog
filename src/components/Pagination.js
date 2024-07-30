import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
    const { page, pageHandler, totalPages } = useContext(AppContext);

    return (
        <div className="flex items-center justify-center mt-8">
            {page > 1 && (
                <button
                    onClick={() => pageHandler(page - 1)}
                    className="px-4 py-2 bg-[#457B9D] text-[#F1FAEE] rounded-lg shadow-md hover:bg-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
                >
                    Previous
                </button>
            )}
            <p className="mx-4 text-lg text-[#1D3557]">
                Page {page} of {totalPages}
            </p>
            {page < totalPages && (
                <button
                    onClick={() => pageHandler(page + 1)}
                    className="px-4 py-2 bg-[#457B9D] text-[#F1FAEE] rounded-lg shadow-md hover:bg-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination;
