import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdPerson } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";

const Navbar = () => {

    return (
        <div className='container-nav w-full mt-[150px]'>
            <div className='flex justify-center z:py-[20px] w-full fixed z:bottom-0 bg-white'>
                <ul className='flex justify-evenly w-full'>
                    <li>
                        <Link to="/offers" className='flex flex-col items-center'>
                            <MdLocalOffer className='text-[30px]' />
                            <p className='text-[17px]'>Offers</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex flex-col items-center'>
                            <MdOutlineExplore className='text-[30px]' />
                            <p className='text-[17px]'>Explore</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className='flex flex-col items-center'>
                            <IoMdPerson className='text-[30px]' />
                            <p className='text-[17px]'>Profile</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar