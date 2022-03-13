import React from 'react';
import './Developer.css'
const Developer = (props) => {
   
    console.log(props.instructor);

    const {des,designation,img,name,linkedin}=props.instructor
    return (
        <div className='bg-slate-50 p-5 py-8 shadow-lg'>
        <img className='image' src={img} alt="" />
        <h1 className='text-xl font-black py-5 text-center'>{designation}</h1>
        <h1 className='text-xl font-black py-5 text-center'>{name}</h1>
        <p className='text-base text-gray-500 text-justify'>{des.slice(0,160)}</p>

    
            <div className='linkedin'><a href={linkedin}>My Linkedin</a></div>
            
    </div>
    );
};

export default Developer;