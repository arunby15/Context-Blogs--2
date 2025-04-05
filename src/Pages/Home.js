import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-6">
      {/* Top Header */}
      <Header />

      {/* Blog Section */}
      <main className="max-w-4xl mx-auto px-4 py-8 mt-[60px]">
        <Blogs />
        <Pagination />
      </main>
    </div>
  )
}

export default Home
