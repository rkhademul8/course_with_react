import React from 'react';
import './Course.css'
const Course = (props) => {

    const {title,img,decription,price,duration}=props.course
    return (
        <div className='bg-slate-50 p-5 py-8 shadow-lg'>
            <img className='image' src={img} alt="" />
            <h1 className='text-xl font-black py-5 text-center'>{title}</h1>
            <p className='text-base text-gray-500 text-justify'>{decription.slice(0,160)}</p>

            <div className='flex justify-between py-8'>
                <div><h1 className='text-lg font-black '>Duration:{duration}</h1></div>
                <div><h1 className='text-lg font-black text-orange-600'>Price: {price} tk</h1></div>

            </div>
        </div>
    );
};

export default Course;