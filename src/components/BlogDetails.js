import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md transition hover:shadow-lg">
      <NavLink to={`/blog/${post.id}`}>
        <h3 className="text-xl font-semibold text-blue-600 hover:underline">
          {post.title}
        </h3>
      </NavLink>

      <p className="text-sm text-gray-500 mt-1">
        By <span className="text-gray-700 font-medium">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="text-indigo-600 hover:underline"
        >
          {post.category}
        </NavLink>
      </p>

      <p className="text-sm text-gray-400 mt-1">Posted on {post.date}</p>

      <p className="mt-4 text-gray-700">{post.content}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="text-sm text-blue-500 hover:underline bg-blue-50 px-2 py-1 rounded"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
