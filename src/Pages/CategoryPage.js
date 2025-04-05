import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.split('/').at(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 mt-[50px]">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-semibold mt-[30px]">
            Blogs On <span className="text-blue-600 font-bold">{category}</span>
          </h2>
        </div>

        <Blogs />
        <Pagination />
      </main>
    </div>
  )
}

export default CategoryPage
