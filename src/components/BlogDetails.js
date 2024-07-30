import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({ post }) {
    return (
        <div
            key={post.id}
            className="mb-6 p-6 border rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#D0F2F1] transition-colors duration-300 border-[#BDC3C7]"
        >
            <h2 className="text-3xl font-extrabold text-[#2C3E50] mb-2">
                <NavLink to={`/blog/${post.id}`} > {post.title}</NavLink>
            </h2>
            <p className="text-sm text-[#2C3E50] mb-2">
                By <span className="font-semibold text-[#1ABC9C]">{post.author}</span> on <span className="font-semibold text-[#1ABC9C]"> <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>{post.category}</NavLink> </span>
            </p>
            <p className="text-sm text-[#2C3E50] mb-4">
                Posted On <span className="font-semibold text-[#1ABC9C]">{post.date}</span>
            </p>
            <p className="text-base text-[#2C3E50] mb-4">{post.content}</p>
            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span
                            className="bg-[#1ABC9C] text-[#FFFFFF] px-3 py-1 rounded-full text-sm"
                        >
                            {`#${tag}`}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails