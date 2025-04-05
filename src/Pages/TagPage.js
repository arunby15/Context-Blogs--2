import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header />

      {/* Tag Content Section */}
      <main className="max-w-4xl mx-auto px-4 py-8 mt-[30px]">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className=" mt-[50px] mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-semibold mt-[20px]">
            Blog Tagged <span className="text-blue-600 font-bold">   #{tag}</span>
          </h2>
        </div>

        <Blogs />
        <Pagination />
      </main>
    </div>
  )
}

export default TagPage
