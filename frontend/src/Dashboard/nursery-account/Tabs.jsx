import React from 'react'
import {BiMenu} from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const Tabs = ({tab, setTab}) => {

    const {dispatch} = useContext(authContext);
    const navigate = useNavigate();

    const logoutHandler = ()=>{
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }

  return (
    <div>
        <span className='lg:hidden '>
            <BiMenu className='w-6 h-6 cursor-pointer ' />
        </span>
        <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md ' >
        <button className={`${
            tab === 'overview' 
            ? "bg-green-100 text-primaryColor" 
            : "bg-transparent text-gray-800 "
        } w-full btn mt-0 rounded-md`} onClick={()=>setTab('overview')}>
            Overview
        </button>

        <button className={`${
            tab === 'appointments' 
            ? "bg-green-100 text-primaryColor" 
            : "bg-transparent text-gray-800 "
        } w-full btn mt-0 rounded-md`} onClick={()=>setTab('appointments')}>
            Appointments
        </button>

        <button className={`${
            tab === 'settings' 
            ? "bg-green-100 text-primaryColor" 
            : "bg-transparent text-gray-800 "
        } w-full btn mt-0 rounded-md`} onClick={()=>setTab('settings')}>
            Profile
        </button>

        <div className="mt-[100px] w-full">
            <button onClick={logoutHandler} style={{ backgroundColor: '#181A1E', color: 'white' }} className="w-full p-3 text-[16px] leading-7 rounded-md">
                Logout
            </button>
            <button style={{ backgroundColor: '#DC2626', color: 'white' }} className="w-full mt-4 p-3 text-[16px] leading-7 rounded-md">
                Delete account
            </button>
        </div>

        </div>
    </div>
  )
}

export default Tabs