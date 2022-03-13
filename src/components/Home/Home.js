import React from 'react';

const Home = () => {
    return (

        <div className='container mx-auto'>
            
            {/* Feature part */}
            <div className='py-10'>
                <h1 className='text-3xl text-center font-bold'>Awesome Feature</h1>
                <p className='text-sm text-gray-400 text-center'>Replenish man have thing gathering lights yielding shall you</p>

                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8  w-3/4 mx-auto py-10">

                    <div className='bg-slate-50 p-5 py-8 shadow-lg'>
                        <h1 className='text-1xl  font-bold'>Scholarship Facility</h1>
                        <p className='text-sm text-gray-400 '>One make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>

                    <div className='bg-slate-50 p-5 py-8 shadow-lg'>
                        <h1 className='text-1xl  font-bold'>Sell Online Course</h1>
                        <p className='text-sm text-gray-400 '>One make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>
                    <div className='bg-slate-50 p-5 py-8 shadow-lg'>
                        <h1 className='text-1xl  font-bold'>Global Certification</h1>
                        <p className='text-sm text-gray-400 '>One make creepeth, man bearing theira firmament won't great heaven</p>
                    </div>
                </div>
            </div>
             {/* Feature part end*/}

             
           
        </div>
    );
};

export default Home;