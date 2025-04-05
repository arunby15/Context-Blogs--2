import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  useEffect(() => {
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  if (blogId) {
    fetchRelatedBlogs();
  }
}, [blogId, setLoading]); // blogId used inside, so it's safe and necessary here


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-[50px]">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            ← Back
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : blog ? (
          <div className="space-y-10">
            <BlogDetails post={blog} />

            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Related Blogs
              </h2>
              <div className="space-y-6">
                {relatedBlogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 font-medium">No Blog Found</p>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
