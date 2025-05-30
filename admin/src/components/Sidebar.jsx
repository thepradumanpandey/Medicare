import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import {assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {

const {aToken} = useContext(AdminContext)
const { dToken } = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-r'>
     {
                aToken && <ul className='text-[#000000] mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#AE1022] border-r-4 border-primary' : ''} `} to={'/admin-dashboard'}>
                        <img className='min-w-5' src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#AE1022] border-r-4 border-primary' : ''} `} to={'/all-appointments'}>
                        <img className='min-w-5' src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#AE1022] border-r-4 border-primary' : ''} `} to={'/add-doctor'}>
                        <img className='min-w-5' src={assets.add_icon} alt="" />
                        <p className='hidden md:block'>Add Doctor</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#AE1022] border-r-4 border-primary' : ''} `} to={'/doctor-list'}>
                        <img className='min-w-5' src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Doctors List</p>
                    </NavLink>
                </ul>
            }

              {
                dToken && <ul className='text-[#000000] mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#871a1a] border-r-4 border-primary' : ''} `} to={'/doctor-dashboard'}>
                        <img className='min-w-5' src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#9a1414] border-r-4 border-primary' : ''} `} to={'/doctor-appointments'}>
                        <img className='min-w-5' src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#7f1616] border-r-4 border-primary' : ''} `} to={'/doctor-profile'}>
                        <img className='min-w-5' src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Profile</p>
                    </NavLink>
                </ul>
            }
    </div>
  )
}

export default Sidebar
