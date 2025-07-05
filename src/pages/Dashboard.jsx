import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

const Dashboard = () => {
  return (
    <>
      <div>
        <button className='px-4 py-2 bg-gray-200 border border-black rounded-md my-5 text-lg font-[600]'>
            Test Project
        </button>

        {/* DASHBOARD NAV */}
        <Navbar/>
        {/* DASHBOARD NAV */}

        {/* CARDS */}
        <Cards/>
        {/* CARDS */}
      </div>
    </>
  )
}

export default Dashboard
