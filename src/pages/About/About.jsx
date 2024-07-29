import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h1 className='about-title fs-26 ls-1'>About BookBites</h1>
            <p className='fs-17'>BookBites is a platform which provide you information about different kinds of books.</p>
            <p className='fs-17'>You can search any book name it will show Book's Subject, About the book and Time of realse of the book. Hope you will enjoy it, Happy reading!!!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
