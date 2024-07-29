import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <h4 className='text-capitalize'>Please click on HOME button on  upper right side!</h4><br />
                
                <p className='header-text fs-18 fw-4'>We all need friends who would be there for us when needed and who would understand us without being judgemental. And books can be our best friends for life, for all the right reasons. Good books enrich our mind and broaden our perspective towards life.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header