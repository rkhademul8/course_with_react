import React from 'react';
import img from '../../image/d5s7rjf-44e49087-3d72-423f-b240-af2326432d24.gif'
import './About.css'


const About = () => {
    return (
        <div className='cus_img text-center py-10 my-10'>
              <h1>About page</h1>
           <img src={img} alt="" />
        </div>
    );
};

export default About;